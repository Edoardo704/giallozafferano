import React from 'react'
import CategoryItem from './CategoryItem';
import { Link, Outlet } from 'react-router-dom';
import Alert from '../Alert/Alert';
import { useGet } from '../Hooks/Crud';
import { useState } from 'react';

const Category = () => {

    const { data, error, mutate } = useGet("http://localhost:3432/categories");
    const [alertShow, setAlertShow] = useState(false);   // Variabile di stato per gestire la visualizzazione dell'alert
    const [alertMessage, setAlertMessage] = useState("");

    const alertDismiss = () => {
        setAlertShow(false);
        mutate();
    }

    const deleteSuccess = () => {
        setAlertMessage("eliminazione completata!")
        setAlertShow(true);
    }


    if (data) {
        return (
            <>
                <div className='col-12'>
                    <Link to="new" className="btn btn-warning m-2">New Category </Link>
                </div>
                <Outlet context={{mutate}}/>
                {
                    data.map(category => (
                        <CategoryItem key={category.id} category={category} deleteSuccess={deleteSuccess} ></CategoryItem>
                    ))
                }
                <Alert show={alertShow} message={alertMessage} onHide={alertDismiss}></Alert>
            </>
        )
    }

}

export default Category