import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom'
import { useGet } from '../Hooks/Crud'
import { useDelete } from '../Hooks/Crud'



const CategoryItem = ({ category, deleteSuccess }) => {

    const [showDelete, setShowDelete] = useState(false)
    const { data: recipes } = useGet("http://localhost:3432/categories/" + category.id + "/recipes")
    const deleteData = useDelete("http://localhost:3432/categories", category.id)

    const performDelete = () => {
        deleteData(deleteSuccess)
    }


    return (
        <>
            <article className='col-12'>
                <div className='m-2 p-2 border'>
                    <div className='row  '>
                        <div className='col-12'>
                            {category.name}
                        </div>

                        <div className='col-12'>
                            <div className='d-flex justify-content-around'>
                                <Link className="btn btn-outline-info btn-sm" to={"edit/" + category.id}>
                                    Modifica
                                </Link>
                                <button type="button" class="sidebar-toggle btn btn-outline-secondary" onClick={() => {
                                    setShowDelete(true)
                                }}>
                                    Elimina
                                </button>
                            </div>
                            <div className='col-12'>
                                <Alert className='mt-2' show={showDelete} variant="danger">
                                    <Alert.Heading>Eliminare {category.name}?</Alert.Heading>
                                    {recipes && recipes.length > 0 ? (

                                        <p>Verranno eliminate anche le {recipes.length} canzoni vuoi procedere?</p>
                                    ) : " "}

                                    <button className='btn btn-secondary m-2 ' onClick={performDelete}>Conferma </button>
                                    <div className='d-flex justify-content-end'>

                                        <button onClick={() => setShowDelete(false)} className='btn btn-outline-success  m-2'>Annulla</button>
                                    </div>
                                </Alert>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

        </>
    )
}

export default CategoryItem
