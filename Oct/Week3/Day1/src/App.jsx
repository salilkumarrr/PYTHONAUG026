import React from 'react'
import AllRoutes from './AllRoutes'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>


      {/* Hook

      // React router

      // useParams() -> it will fetch the parameter from the path
      // useSearchParams() -> it will fetch the query (?) from the path
      // useNavigate() -> to redirect from one page to another
      
      */}
      <Navbar/>
     <AllRoutes/>
    </div>
  )
}

export default App
