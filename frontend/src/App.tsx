import { BrowserRouter } from "react-router-dom"
// import AppRoutes from "./routes/AppRoutes"
import { CartProvider } from "./store/store"
// import RetryFunctionCall from "./timepass/RetryFunctionCall"
// import CounterApp from "./timepass/Infosys/CounterApp"
// import SearchFilter from "./timepass/Infosys/SearchFilter"
// import ResponseLoaderError from "./timepass/Infosys/ResponseLoaderError"
// import Pagination from "./timepass/Infosys/Pagination"
// import ControlledAndUncontrolled from "./timepass/Infosys/ControlledAndUncontrolled"
// import PerformanceTrio from "./timepass/Infosys/PerformanceTrio"
// import Loginform from "./timepass/Infosys/LoginForm"
// import SearchableUserList from "./timepass/Hexaware/SearchableUserList"
import StallsPage from "./pages/StallsPage"
// import UploadImages from "./pages/UploadImages"
// import Cart from "./timepass/Hexaware/Cart"
// import MultiStepForm from "./timepass/MultiStepForm"
// import SearchSuggestions from "./timepass/SearchSuggestions"
// import UserSearch from "./timepass/UserSearch"
// import ProductListing from "./product-listing-module/ProductListing"
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
    <BrowserRouter>
      <CartProvider >
        <StallsPage />
      </CartProvider>
    </BrowserRouter>
    // <MultiStepForm />
    // <SearchSuggestions />
    // <UserSearch />
    // <ProductListing />


    // Infosys Sample coding questions
    // <>
    //   {/* <UploadImages /> */}
    //   {/* <SearchFilter /> */}
    //   {/* <ResponseLoaderError /> */}
    // </>
  )
}

export default App


