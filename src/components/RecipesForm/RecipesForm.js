import React, { useState } from 'react'
import { FloatingLabel } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../Alert/Alert';
import { usePut } from "../Hooks/Crud"
import { usePost } from "../Hooks/Crud"
import { useEffect } from 'react';
import FetchSelect from '../FetchSelect.js/Select';





const RecipesForm = ({ data = {}, mutate }) => {
  const base64prefix = "data:image/jpeg;base64,"

  const [recipes, setRecipes] = useState({
    title: "",
    description: "",
    ingredients: "",
    difficulty: "",
    price: "",
    timePreparation: "",
    cookingTime: "",
    idCategory: "",
    cover: "",

  });

  const [imgPreview, setImgPreview] = useState((data.cover ? base64prefix + data.cover : ""))

  const [alertShow, setalertShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const putData = usePut("http://localhost:3432/recipes", data.id)
  const postData = usePost("http://localhost:3432/recipes")
  const navigate = useNavigate();



  useEffect(() => {
    if (data.id > 0) {
      setRecipes({
        title: data.title,
        description: data.description,
        ingredients: data.ingredients,
        difficulty: data.difficulty,
        price: data.price,
        timePreparation: data.timePreparation,
        cookingTime: data.cookingTime,
        idCategory: data.idCategory,
        cover: data.cover ? data.cover : "",
      })
      if (data.cover) {
        setImgPreview(base64prefix + data.cover)
      }
    }
  }, [data])


  const getBase64 = async (file) => {
    var reader = new FileReader(); 

    await reader.readAsDataURL(file);
    reader.onload = function () {
      setRecipes((prevValues) => {
        setImgPreview(reader.result);
        return {
          ...prevValues,
          "cover": reader.result.replace(base64prefix, "")
        }
      });
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }


  const submitSuccess = (e) => {
    setAlertMessage("Salvataggio effettuato")
    setalertShow(true);

  }


  const formSubmit = (e) => {
    e.preventDefault();
    if (data.id > 0) {
      putData(recipes, submitSuccess)
    }
    else {
      postData(recipes, submitSuccess)
    }
  }

  const handleChange = (e) => {
    if (e.target.name === "cover") {
      getBase64(e.target.files[0])
    }
    else {
      setRecipes((prevValues) => {
        return {
          ...prevValues,
          [e.target.name]: e.target.value
        }
      })
    }
  }

  const alertDismiss = () => {
    setalertShow(false)
    navigate("/recipes", {
      replace: true
    })
    mutate();
  }



  return (
    <>
      <form className='row'>

        <FloatingLabel controlId='fileCover' label='Immagine'>
          <input id='fileCover' className='form-control' name='cover' type='file' onChange={handleChange} />
          <img src={imgPreview} alt='Anteprima ricetta' className='my-2' style={{ width: '100px' }} ></img>
        </FloatingLabel>

        <div className='col-6'>
          <FloatingLabel controlId='txtcookingTime' label="CookingTime" className='m-2'>
            <input id="txtcookingTime" className='form-control' name='cookingTime' value={recipes.cookingTime} onChange={handleChange} required></input>
          </FloatingLabel>
        </div>
        <div className='col-6'>
          <FloatingLabel controlId='txtdescription' label="Description" className='m-2'>
            <input id="txtdescription" className='form-control' name='description' value={recipes.description} onChange={handleChange} required></input>
          </FloatingLabel>
        </div>
        <div className='col-6'>
          <FloatingLabel controlId='txtdifficulty' label="Difficulty" className='m-2'>
            <input id="txtdifficulty" className='form-control' name='difficulty' value={recipes.difficulty} onChange={handleChange} required></input>
          </FloatingLabel>
        </div>
        <div className='col-6'>
          <FloatingLabel controlId='txtingredients' label="Ingredients" className='m-2'>
            <input id="txtingredients" className='form-control' name='ingredients' value={recipes.ingredients} onChange={handleChange} required></input>
          </FloatingLabel>
        </div>
        <div className='col-6'>
          <FloatingLabel controlId='txtprice' label="Price" className='m-2'>
            <input id="txtprice" className='form-control' name='price' value={recipes.price} type='number' onChange={handleChange} required></input>
          </FloatingLabel>
        </div>
        <div className='col-6'>
          <FloatingLabel controlId='txttimePreparation' label="TimePreparation" className='m-2'>
            <input id="txttimePreparation" className='form-control' name='timePreparation' value={recipes.timePreparation} onChange={handleChange} required></input>
          </FloatingLabel>
        </div>

        <div className='col-6'>
          <FloatingLabel controlId='txttitle' label="Title" className='m-2'>
            <input id="txttitle" className='form-control' name='title' value={recipes.title} onChange={handleChange} required ></input>
          </FloatingLabel>
        </div>
        <div className="col-6">
          <FloatingLabel controlId='idCategory' label="Category" className='m-2'>
            <FetchSelect className="form-control form-control-sm" name="idCategory" value={recipes.idCategory} onChange={handleChange} url={"http://localhost:3432/categories"} required />
          </FloatingLabel>
        </div>
        <div className='col-12'>
          <div className='d-flex justify-content-end m-3'>
            <button className='btn btn-sm btn-outline-primary m-2 ' onClick={formSubmit}> Salva</button>
            <Link className=' btn btn-sm btn-outline-danger m-2' to="/recipes">Annulla</Link>
          </div>
        </div>

        <Alert show={alertShow} onHide={alertDismiss} message={alertMessage}></Alert>
      </form >

    </>
  )
}

export default RecipesForm