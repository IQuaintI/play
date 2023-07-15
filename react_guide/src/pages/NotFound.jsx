import { useEffect } from "react";
import { useNavigate} from "react-router-dom";

export function NotFound() {
    const navigate = useNavigate()

    useEffect(() => { 
        setTimeout(() => {
            navigate('/', { state: `Redirected from `})}, 2000)}, [navigate])
    return (<h1>Not Found</h1>)
}