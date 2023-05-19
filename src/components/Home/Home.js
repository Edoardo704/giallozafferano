import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useGet } from '../Hooks/Crud';
import "../Home/style.scss";
import calici from "../Foto/calici vino.webp"
import pasta from "../Foto/pasta.jpg"

const Home = () => {
  const base64prefix = "data:image/jpeg;base64,";

  const { data: recipes, loading, error } = useGet("http://localhost:3432/recipes");

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <>
      <div className='mb-1'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={calici}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={pasta} alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>

        <h1 className='text-center m-5 '>LE NOSTRE RICETTE</h1>

        <section className="container">
          {recipes && recipes.map(recipe => (
            <div className="row" key={recipe.id}>
              <div className="col-md-7 flex margin">
                <h2>{recipe.title}</h2>
                <p>{recipe.description}</p>
                <h5 className='red'>Ingredienti:</h5>
                <p>{recipe.ingredients}</p>
                <h5 className='red'> Difficoltà:</h5>
                <p>{recipe.difficulty}</p>
              </div>

              <div className="col-md-5 ">
                <img src={base64prefix + recipe.cover} className="img-fluid fluid" alt="Recipe" />
              </div>
            </div>
          ))}
          <hr className="orizontal" />
          <div className="text-center mt-5">
            <Link to="/recipes" className="btn btn-primary">Personalizza</Link>
          </div>
        </section>
      </div>


    </>
  );
}

export default Home;
