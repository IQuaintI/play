import {Routes, Route} from "react-router-dom"
import { BookList } from "./pages/BookList"
import { Books } from "./pages/Book"
import { NewBook } from "./pages/NewBook"
import { BookLayout } from "./BookLayout"

export function BookRoutes() {
    return (
        <>
        <Routes>
        <Route element={<BookLayout />} >
            <Route index element={<BookList />} />
            <Route path = ":id" element={<Books />} />
            <Route exact path = "new" element={<NewBook />} />
        </Route>
        </Routes>
        </>
    )
}