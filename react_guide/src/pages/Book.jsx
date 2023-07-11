import { useParams,useOutletContext } from "react-router-dom"

export function Books() {
    const {id} = useParams()
    const obj = useOutletContext()
    return  (<h1>Book {id} {obj.hello}</h1>) 
}