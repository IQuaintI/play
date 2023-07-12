import { Routes, Route, Link,NavLink } from "react-router-dom"
import {Home} from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { BookRoutes } from "./BookRoutes"
import "./styles.css"

function App () {
  return (
    <>
    <nav>
      <ul>
        <li>
          <NavLink to = '/'>Home</NavLink>
        </li>
        <li><Link to = '/books'>Books</Link></li>
        </ul>
    </nav>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/books/*" element= {<BookRoutes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App