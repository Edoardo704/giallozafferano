import React from 'react'
import RecipesForm from './RecipesForm';
import { useOutletContext } from 'react-router-dom';


const NewRecipes = () => {

  const { mutate } = useOutletContext();

  return (
    <>
      <div className="m-2 p-2 border">
        <h5>Nuova Ricetta</h5>
        <RecipesForm mutate={mutate}></RecipesForm>
      </div>
    </>
  )
}



export default NewRecipes