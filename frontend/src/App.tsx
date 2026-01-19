
import {getStalls} from './api/stall'
import { useEffect } from 'react'
// import './App.css'


/**
 * React Query manages server state by 
 * fetching, caching, synchronizing, and 
 * updating API data automatically 
 * in React applications
 * React Query manages server state -- Fetching, Caching, Synchronization, Background updates
 * React Query focuses on -- Data lifecycle inside React
 * React Query still needs Axios or fetch underneath
 */
function App() {

  useEffect(()=>{
    const result = getStalls()
    console.log(result)
  })
  
  return (
    <>
      test
    </>
  )
}

export default App
