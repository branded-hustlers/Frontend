import HomePage from "./Pages/HomePage"
import PersonalInformation from "./Pages/PersonalInformation"
import Settings from "./Pages/Settings"
import { BrowserRouter, Routes,Route} from "react-router-dom"
import ShopPage from "./Pages/ShopPage"

function App() {
 
  return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/settings" element={<Settings />} />
       <Route path="/personal-information" element={<PersonalInformation />} />
       <Route path="/shopPage" element={<ShopPage />}/> 
     </Routes>
   </BrowserRouter>
  )
}

export default App