import React, { useEffect, useState } from 'react';
import { usePut } from '../Hooks/Crud';
import { usePost } from '../Hooks/Crud';
import { Link } from 'react-router-dom';
import Alert from '../Alert/Alert';
import { useNavigate } from 'react-router-dom';
import { FloatingLabel } from 'react-bootstrap';

const CategoryForm = ({ data = {}, mutate }) => {

    const [category, setCategory] = useState({
        name: "",
    });

    const [alertShow, setAlertShow] = useState(false);
    const [alertMessagge, setAlertMessage] = useState("");

    const putData = usePut("http://localhost:3432/categories", data.id);

    const postData = usePost("http://localhost:3432/categories");

    const navigate = useNavigate();

    useEffect(() => {
        if (data.id > 0) {
            setCategory({
                name: data.name,
            });
        }
    }, [data]);

    const handleChange = (e) => {
        setCategory((prevValues) => {
            return {
                ...prevValues,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.id > 0) {
            putData(category, submitSuccess);
        } else {
            postData(category, submitSuccess);
        }
    }

    const submitSuccess = () => {
        setAlertMessage("Salvataggio completato!");
        setAlertShow(true);
    }

    const alertDismiss = () => {
        setAlertShow(false);
        navigate("/category", { replace: true });
        mutate();
    }

    return (
        <>
            <form className="row" onSubmit={handleSubmit}>
                <div className="col-12">
                    <FloatingLabel controlId="txtName" label="Nome" className="my-2">
                        <input id="txtName" className="form-control" name="name"  value={category.name} onChange={handleChange} placeholder="Nome" required></input>
                    </FloatingLabel>
                </div>
                <div className="col-12">
                    <div className='d-flex justify-content-start m-3'>
                        <button className='btn btn-success' type='submit'>
                            Salva
                        </button>
                        <Link className=" btn btn-outline-danger" to="/category">Annulla</Link>
                    </div>
                </div>
            </form>

            <Alert show={alertShow} onHide={alertDismiss} message={alertMessagge} />
        </>
    );
};

export default CategoryForm;
