import HomePage from "./Pages/HomePage"
import PersonalInformationPage from "./Pages/PersonalInformationPage"
import SettingsPage from "./Pages/SettingsPage"
import { BrowserRouter, Routes,Route} from "react-router-dom"
import ShopPage from "./Pages/ShopPage"


function App() {
 
  return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/settingsPage" element={<SettingsPage />} />
       <Route path="/personal-information" element={<PersonalInformationPage />} />
       <Route path="/shopPage" element={<ShopPage />}/> 
     </Routes>
   </BrowserRouter>

  )
}

export default App