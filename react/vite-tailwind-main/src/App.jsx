import React from 'react' // <-- React is a default export
import { useEffect } from 'react' // <-- useEffect is a named export

//What does useEffect do? It's a hook that allows you to run code when a component mounts and unmounts.//

//The function below takes the array of pictures and returns an array of unique pictures.//

function onlyUniqueBreeds(pics) {
  const uniqueBreeds = [] 
  const uniquePics = pics.filter(pic => { 
    const breed = pic.split("/")[4] 
    if (!uniqueBreeds.includes(breed) && !pic.includes(" ")) {
      uniqueBreeds.push(breed)
      return true
    }
  })
  return uniquePics.slice(0, Math.floor(uniquePics.length / 4) * 4)
}


function App() {
  useEffect(() => {
    const reqController = new AbortController()

    async function fetchData() {
     try {
      const picsPromise = await fetch('https://dog.ceo/api/breeds/image/random/50', {signal: reqController.signal})
      const pics = await picsPromise.json()
      const uniquePics = onlyUniqueBreeds(pics.message)
      console.log(uniquePics)
     }
      catch (error) {
        console.log('Request was aborted')
      }
    } 
    fetchData()

    return () => {
      reqController.abort()
    }
  },
  [])
  return (
    <div>
      <h1 className="text-green-700 italic text-4xl">Hello from React</h1>
    </div>
  )
}

export default App
