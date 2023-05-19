import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import CategoryForm from './CategoryForm'
import {useGet} from "../Hooks/Crud"

const EditCategory = () => {
    const {id} = useParams();
  const {data}= useGet("http://localhost:3432/categories", id)
  const {mutate}= useOutletContext();


  if (data) {
  return (
   
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <title>Modifica Categoria</title>
                    <CategoryForm data={data} mutate={mutate}></CategoryForm>
                </div>
            </div>
        </div>
  )
}
}

export default EditCategory