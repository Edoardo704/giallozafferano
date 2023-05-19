import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import RecipesForm from './RecipesForm';
import {useGet} from "../Hooks/Crud"

const EditRecipes = () => {
    const {id} = useParams();
  const {data}= useGet("http://localhost:3432/recipes", id)
  const {mutate}= useOutletContext();


  if (data) {
  return (
   
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <title>Modifica Ricetta</title>
                    <RecipesForm data={data} mutate={mutate}></RecipesForm>
                </div>
            </div>
        </div>
  )
}
}

export default EditRecipes