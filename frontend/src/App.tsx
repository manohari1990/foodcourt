import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import MultiStepForm from "./timepass/MultiStepForm"
import SearchSuggestions from "./timepass/SearchSuggestions"
import UserSearch from "./timepass/UserSearch"
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
  return (
    <MultiStepForm />
    // <SearchSuggestions />
    // <UserSearch />
  )
}

export default App
