import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  const handleResize = () => { 
    setwindowWidth(window.innerWidth);
  }

  useEffect(() => { 
    window.addEventListener('resize', handleResize);

    return () => { 
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
    <div>{windowWidth}</div>
    </>
  )
}


// const [resourceType, setResourceType] = useState('posts');
  // const [items, setItems] = useState([]);


{/* <button onClick={() => setResourceType('posts')}>posts</button>
<button onClick={() => setResourceType('users')}>users</button>
<button onClick={() => setResourceType('comments')}>comments</button> */}

{/* <h1>{resourceType}</h1>
{items.map(item => { 
  return <pre>{JSON.stringify(item)}</pre>
})} */} 


// useEffect(() => { 
//   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//     .then(response => response.json())
//     .then(json => setItems(json))
// }, [resourceType])