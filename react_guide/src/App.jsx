import { Routes, Route, Link } from "react-router-dom"
import {Home} from "./pages/Home"
import { BookList } from "./pages/BookList"
import { Books } from "./pages/Book"
import { NewBook } from "./pages/NewBook"
import { NotFound } from "./pages/NotFound"
import { BookLayout } from "./BookLayout"

function App () {
  return (
    <>
    <Routes>
      <Route path="/books" element= {<h1>Extra content</h1>} />
    </Routes>
    <nav>
      <ul>
        <li><Link to = '/'>Home</Link></li>
        <li><Link to = '/books'>Books</Link></li>
        </ul>
    </nav>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/books" element= {<BookLayout />}>
        <Route index element={<BookList />} />
        <Route path = ":id" element={<Books />} />
        <Route exact path = "new" element={<NewBook />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App