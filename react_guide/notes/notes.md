# A guide to React Router

## What is React?

React is an open-source JavaScript library for building user interfaces. It was developed by Facebook and is widely used in web development. 

## Why use React?

React is a component-based library. This means that you can create components that can be reused throughout your application. This makes it easier to maintain your code and makes it easier to add new features to your application.

## What is React Router?

React Router is a library that allows you to create routes in your React application. It is a popular library that is used by many developers.

A route is a path that a user can take through your application. For example, if you have a blog, you might have a route for the home page, a route for the blog posts, and a route for the about page.

## Why use React Router?

React Router is a popular library that is used by many developers. It is easy to use and has a lot of features that make it easy to create routes in your application.

## Let's get started!

### Setting up your environment

To get started with React, you will need to install Node.js and npm. You can download Node.js from [here](https://nodejs.org/en/download/). npm is included with Node.js.

You then create a new project by running the following command in your terminal:

```bash
npx create-react-app my-app
```

This will create a new folder called `my-app` with all the files you need to get started with React. (You can change the name of the folder to whatever you want.)

npx is a tool that allows you to run npm packages without installing them globally. If you don't have npx installed, you can install it by running the following command:

```bash
npm install -g npx
```

<span style = 'color: yellow'>Note: For this guide we will be using vite instead of create-react-app. Vite is a tool that allows you to create React apps without having to install any dependencies. You can install it by running the following command: </span>

```bash
npm install -g vite
```

React Router has to be installed separately. You can install it by running the following command:

```bash
npm install react-router-dom
```

<span style = 'color:red'>Warning: There are two separate packages for React Router. One is for the web (react-router-dom) and one is for native (react-router-native). Make sure you install the correct one for your project. </span>

---

### Basics

We are going to be using JSX in this guide. JSX is a syntax extension to JavaScript that allows you to write HTML-like code in your JavaScript files. It is not required to use JSX, but it makes it easier to write React code.

First we are going to have to import the BrowserRouter component from react-router-dom. This is the component that will allow us to create routes in our application.

```jsx
import { BrowserRouter } from 'react-router-dom';
```

This has to be imported into the index.js file (or in our case in the main.jsx file). This is the file that is rendered when you run the application.

<span style = 'color:yellow'>Note: We call the import with brackets because we are importing a named export. If we were importing a default export, we would not need to use brackets. </span>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

The BrowserRouter component is a wrapper that allows us to create routes in our application. It is a higher-order component (HOC) that wraps our application in a Router component. This allows us to create routes in our application.

A higher-order component is a function that takes a component as an argument and returns a new component. It is a common pattern in React.

In `App.jsx` we are going to create a new component called `App`. This component will be the root component of our application. It will contain all the other components in our application.

```jsx
import { Routes, Route } from "react-router-dom"
import {Home} from "./pages/Home"
import { BookList } from "./pages/BookList"

function App () {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/booklist" element={<BookList />} />
    </Routes>
  )
}

export default App
```

As you can see above the `Routes` is used as a wrapper for the `Route` components. The `Route` component is used to define a route in our application. It takes two props: `path` and `element`. The `path` prop is used to define the path of the route. The `element` prop is used to define the component that will be rendered when the route is matched.

In other words, when the url matches the `path`, the `element` will be rendered.

Should the `path` prop be omitted, the `Route` component will match any url meaning that the `element` will be rendered on every page.

The `exact` prop is used to make sure that the `Route` component only matches the url exactly. It will not match any sub-routes (e.g. `/booklist/1`).

<span style = 'color:yellow'>Note: The `/` is typically not shown in the url but it is there implicitly meaning that whatever url has nothing coming after it such as www.example.com looks more like this www.example.com/</span>

---

### Links

To create a link in our application we use the `Link` component from react-router-dom. It takes a `to` prop which is the path that the link will take you to.

```jsx
import { Routes, Route, Link } from "react-router-dom"
import {Home} from "./pages/Home"
import { BookList } from "./pages/BookList"

function App () {
  return (
    <>
    <nav>
      <ul>
        <li><Link to = '/'>Home</Link></li>
        <li><Link to = '/booklist'>Booklist</Link></li>
        </ul>
    </nav>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/booklist" element={<BookList />} />
    </Routes>
    </>
  )
}

export default App
```

The `<>...</>` are called fragments. They are not rendered in the DOM.

Fragments allow you to group multiple elements without needing an additional parent element (e.g. a `div`).

The `Link` component is used to create a link in our application. It takes a `to` prop which is the path that the link will take you to.

The `Link` component is a wrapper for the `a` tag.

When the link is clicked it will take you to the path specified in the `to` prop and it will not reload the page. 

The only part of the page that will be re-rendered is the part that is specified in the `element` prop of the `Route` component.

---

### Router Types 

There are three main types of routers in React Router: BrowserRouter, HashRouter, and MemoryRouter.

The **BrowserRouter** is the most common type of router. It uses the HTML5 history API to keep track of the current location in the URL. It provides a clean URL without the hash (#) symbol. This is the default router in React Router.

The **HashRouter** uses the URL hash portion (the part after the # symbol) to handle routing. It is compatible with older browsers and is useful for static websites or environments where server configuration is limited. It adds a hash to the URL, allowing navigation to different routes within the application.

The **MemoryRouter** is a router implementation that keeps the history of routing in memory without modifying the URL. It is useful for testing and non-URL-based routing scenarios, such as rendering React components on the server or in non-browser environments.

There are also two other types of routers: StaticRouter and NativeRouter.

The **StaticRouter** is used for rendering React components on the server-side. It does not rely on the browser's history or URL, as it receives the current location as a prop. It is commonly used with server-side rendering frameworks like Next.js or for building universal or isomorphic applications.

The **NativeRouter** is designed for React Native applications. It provides routing capabilities specifically tailored for mobile app development using React Native. It uses the native routing mechanisms provided by the platform, such as navigation controllers or stack navigators.

<span style = 'color:yellow'>Why do use one router over another?</span>

#### <span style = 'color:yellow'>BrowserRouter</span>
If you require clean, user-friendly URLs without hash fragments, the **BrowserRouter** is the most appropriate choice. It uses the HTML5 History API to handle routing and provides clean URLs that are more SEO-friendly and look more like traditional web URLs.

If you don't know what to use, use this one.

#### <span style = 'color:yellow'>HashRouter</span>
If you need to support older browsers that do not fully support the HTML5 History API, the **HashRouter** is a suitable option. It uses the URL hash portion to handle routing, allowing compatibility with older browsers. 

**HashRouter** is used when the URL cannot (or should not) be sent to the server for processing. This is often the case with static websites or environments where server configuration is limited (typically in a shared hosting environment).

**HashRouter** is not recommended unless absolutely needed. 

#### <span style = 'color:yellow'>StaticRouter</span>
If you are implementing server-side rendering (SSR) in your application, the **StaticRouter** is commonly used. It allows you to render React components on the server and pass the current location as a prop. This is essential for applications that need to provide initial HTML content for search engine indexing or improved performance.

This imports from `react-router-dom/server`.

You cannot navigate the browser with this router and instead have to rely on setting the location like this:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {StaticRouter} from 'react-router-dom/server'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StaticRouter location = '/booklist'>
    <App />
    </StaticRouter>
  </React.StrictMode>,
)
```

The location opens the booklist page when the app is rendered.

Only useful for server-side rendering.

#### <span style = 'color:yellow'>MemoryRouter</span>
If you are testing React components or building applications for non-browser environments, such as server-side rendering frameworks or non-browser platforms, the **MemoryRouter** or other custom router implementations can be used. These routers keep the routing history in memory without modifying the URL.

The memory in this case being the RAM of the computer.

The only real use case for this is if you are testing code in a non-browser environment.

#### <span style = 'color:yellow'>NativeRouter</span>
For React Native applications, the **NativeRouter** is the appropriate choice. It is specifically designed for mobile app development using React Native and utilizes the native routing mechanisms provided by the platform, such as navigation controllers or stack navigators.

If you are not using React Native, you should not use this router.

React Native being the mobile version of React.

#### <span style = 'color:yellow'>unstable_HistoryRouter</span>
The **unstable**_HistoryRouter is used to alter the history of the browser. It is not recommended for production (as it is unstable) and should only be used for testing purposes.

Browser history is a JavaScript object that stores the current location in the URL.

In other words when you go back a page or forward a page in the browser, the browser history is what keeps track of that.

---

### Dynamic Routes

Dynamic routes are routes that allow you to handle variable data within the routing system. 

To define a dynamic route, you need to use a colon (:) in the path to indicate where the variable data will be located.

```jsx
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/users/:userId" component={UserDetail} />
    </Router>
  );
};
```

In this example, the `:userId` is the dynamic part of the route. It will match any path that starts with `/users/` and will pass the value of the dynamic part to the component as a prop.

So if you go to `/users/1` the `userId` prop will be equal to `1`.

In the url it would look like this: `http://localhost:3000/users/1`

For this to work however, the useParam hook must be used.

```jsx
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { userId } = useParams();
  return <div>User ID: {userId}</div>;
};
```

The `useParams` hook returns an object containing the dynamic parts of the URL. In this case, it will return an object with a `userId` property.

---

### Route Specificity

A route can be made to be more specific by adding the `exact` prop to the `Route` component.

```jsx
<Route exact path="/" component={Home} />
```

This will make it so that the route will only match if the path is exactly equal to the path specified in the `path` prop.

If there are two routes that match the same path, the hard-coded route will be matched over the dynamic route.

```jsx
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/users/:userId" component={UserDetail} />
      <Route path="/users/1" component={UserDetail} />
    </Router>
  );
};
```

In this example, the `/users/1` is not a dynamic route, so it will be matched over the dynamic route.

Also, the `*` character can be used to match any path.

```jsx
<Route path="*" component={NotFound} />
```

It is typically used as the last route in the `Router` component to catch any routes that do not match any of the other routes which would lead to an error page. 

---

### Nested Routes

Nested routes are routes that are nested within other routes. 

```jsx
import { Routes, Route, Link } from "react-router-dom"
import {Home} from "./pages/Home"
import { BookList } from "./pages/BookList"
import { Books } from "./pages/Book"
import { NewBook } from "./pages/NewBook"
import { NotFound } from "./pages/NotFound"

function App () {
  return (
    <>
    <nav>
      <ul>
        <li><Link to = '/'>Home</Link></li>
        <li><Link to = '/books'>Books</Link></li>
        </ul>
    </nav>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/books">
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
```

In this example, the route `/books` is the parent route and the routes `/books/:id` and `/books/new` are the child routes.

The `index` prop is used to specify the default route for the parent route.

In other words it acts as the homepage for the parent route.

It is also possible to give a parent route a default route by using the `element` prop.

```jsx
<Route path="/books" element={<BookLayout />} />
```

This means that the `BookLayout` component will be rendered when the `/books` route is matched (Which means that the layout will be visible on every child route of the `/books` route as well).

The `path` section can be omitted from the parent route with is used if child paths do not share a url with the parent path.

--- 

### <span style = 'color:yellow'>A quick guide on Outlet</span>

The `Outlet` component allows you to define the layout of the page by rendering the child routes of the current route.

```jsx
import { Routes, Route, Link, Outlet } from "react-router-dom"

function App () {
  return (
    <>
    <nav>
      <ul>
        <li><Link to = '/'>Home</Link></li>
        <li><Link to = '/books'>Books</Link></li>
        </ul>
    </nav>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/books" element={<BookLayout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App

function BookLayout () {
  return (
    <>
    <h1>Books</h1>
    <Outlet />
    </>
  )
}
```

In this example, the `Outlet` component is used to render the child routes of the `/books` route.

The `Outlet` component can take one variable called the `context` which is an object that can pass down data to the child routes.

```jsx
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

import { useParams,useOutletContext } from "react-router-dom"

export function Books() {
    const {id} = useParams()
    const obj = useOutletContext()
    return  (<h1>Book {id} {obj.hello}</h1>) 
}
```

To use the `context` in the child routes, the `useOutletContext` hook must be used. 

In this case it is set to `obj` which is then used to access the `hello` property of the `context` object (This renders the word `World` on the page).

---

It is possible to have extra routes that are not nested within the parent route.

```jsx
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
```

The `Extra content` text will be rendered on the page when the `/books` route is matched.

A `location` can also be hard-coded into the `Routes` component.

<span style = 'color:yellow'>Note: A `location` is the url that is used to match the route.</span>

```jsx
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
    <Routes location = '/books'>
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
```

In the above example, the `Extra content` text will be rendered on the page when the `/books` route is matched as opposed to just matching to the `/` route. (It will render on the `/books` route and all of its child routes).

