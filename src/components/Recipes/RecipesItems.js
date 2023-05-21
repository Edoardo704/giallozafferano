import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useGet } from "../Hooks/Crud";
import { useDelete } from "../Hooks/Crud";
import "../Recipes/style.scss";

const RecipesItems = ({ recipes, deleteSuccess }) => {
  const base64prefix = "data:image/jpeg;base64,";

  const { data: category } = useGet("http://localhost:3432/categories", recipes.idCategory);
  const deleteData = useDelete("http://localhost:3432/recipes", recipes.id);

  const performDelete = () => {
    deleteData(deleteSuccess);
  };

  return (
    <div className="recipes-item">
      <h5 className="mb-4 color-title">{recipes.title}</h5>
      <div className="row">

        <div className="row">
          <div className="col-md-6">
            <img src={base64prefix + recipes.cover} className="img-fluid fluid" alt="Recipe" />
          </div>
          <div className="col-md-6">
            <p>
              <b>Description:</b> {recipes.description}
              <hr />
              <b>Time Preparation:</b> {recipes.timePreparation + " Minuti " || ""}
              <hr />
              <p>
                <b>Difficulty:</b> {recipes.difficulty || ""}
              </p>
              <hr />
              <p>
                <b>Price:</b> {recipes.price + " Euro " || ""}
              </p>
              <hr />
              <p>
                <b>Category:</b> {category ? category.name : ""}
              </p>
             
              <button className="btn btn-danger btn-sm p-2 " onClick={performDelete}>
              <FontAwesomeIcon icon={faTrashAlt} /> Delete
            </button>
            <Link className="btn btn-info " to={"edit/" + recipes.id}>
              <FontAwesomeIcon icon={faPencilAlt} /> Edit
            </Link>
            </p>
          </div>
        </div>
        <hr />
      
        

      </div>
    </div>
  );
};

export default RecipesItems;
