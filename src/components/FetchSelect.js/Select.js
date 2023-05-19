
import { useGet } from "../Hooks/Crud"

const FetchSelect = ({className, name, value, onChange, url }) => {
   
    const { data } = useGet( url )
    if (data) {
        return (

            <select className={className} name={name} value={value} onChange={onChange}>
                 {/* //Questa riga crea un elemento select HTML con gli attributi "className", "name", "value" e "onChange" 
    //impostati ai valori degli attributi corrispondenti passati alla funzione "FetchSelect". */}
                <option value={0}>---Seleziona---</option>
                {data.map(item => <option key={item.id} value={item.id}>
                    {/* Questa riga utilizza la funzione "map" dell'array JavaScript per creare un'opzione del menu a tendina
                     per ogni oggetto presente nell'array "data". Per ogni oggetto "item", viene creata un'opzione con l'attributo 
                     "key" impostato all'ID dell'oggetto e l'attributo "value" impostato all'ID dell'oggetto stesso. 
                    Il testo dell'opzione viene impostato al valore della proprietà "name" dell'oggetto. */}
                    {item.name}
                </option>)}
            </select>
        )
    }
    return (
        <select className={className}>
            <option value={0}>---Seleziona---</option>
        </select>
    )
}



export default FetchSelect