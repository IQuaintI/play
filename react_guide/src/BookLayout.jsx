import { Link, Outlet } from "react-router-dom"

export function BookLayout() {
    return (
    <>
    <h1>Book List</h1>
    <Link to = '/books/1'>Book 1</Link>
    <br /> 
    <Link to = '/books/2'>Book 2</Link>
    <br /> 
    <Link to = '/books/new'>New Book</Link>
    <Outlet context={ {hello: 'World'} }/>
    </>
    )
}

