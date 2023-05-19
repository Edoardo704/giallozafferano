import React from 'react'

import { useOutletContext } from 'react-router-dom'
import CategoryForm from './CategoryForm'

const NewCategory = () => {
  const { mutate } = useOutletContext()
  return (
    <>
      
      <CategoryForm mutate={mutate}></CategoryForm>
    </>

  )
}

export default NewCategory