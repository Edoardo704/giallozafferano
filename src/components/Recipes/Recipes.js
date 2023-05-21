import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useGet } from "../Hooks/Crud"
import RecipesItems from "../Recipes/RecipesItems";
import Alert from "../Alert/Alert";

import { Link } from "react-router-dom";

const Recipes = () => {
  const { data,  isLoading, mutate } = useGet("http://localhost:3432/recipes")

  const [alertShow, setAlertShow] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")



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
        <Outlet context={{ mutate }}></Outlet>
        <Link className="btn btn-outline-dark btn-sm d-flex justify-content-center m-3" to="new" >Nuova Ricetta</Link>
        <article className='container'>
          <div className="row">
            {/* context prende degli oggetti come parametri */}
            {data.map(recipes => (
              <div key={recipes.id} className="col-12">
                <RecipesItems recipes={recipes} deleteSuccess={deleteSuccess}></RecipesItems>
              </div>
            ))}
            <Alert show={alertShow} onHide={alertDismiss} message={alertMessage} />
          </div>
        </article>


      </>
    );
  }
  else if (isLoading) {
    <div>Loading.....</div> // possiamo mettere un loader a tutto schermo
  }
}


export default Recipes