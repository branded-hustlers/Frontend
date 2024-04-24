import HomePage from "./Pages/HomePage"
<<<<<<< HEAD
import PersonalInformation from "./Pages/PersonalInformation"
import Settings from "./Pages/Settings"
import { BrowserRouter, Routes,Route} from "react-router-dom"
import ShopPage from "./Pages/ShopPage"
=======
import PersonalInformationPage from "./Pages/PersonalInformationPage"
import SettingsPage from "./Pages/SettingsPage"
import AboutUsPage from "./Pages/AboutUsPage"
>>>>>>> 72c8bc35884a6ed62d4e81f135d64abdb6b4d8c4

function App() {
 
  return (
<<<<<<< HEAD
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/settings" element={<Settings />} />
       <Route path="/personal-information" element={<PersonalInformation />} />
       <Route path="/shopPage" element={<ShopPage />}/> 
     </Routes>
   </BrowserRouter>
=======
    <>
     <HomePage />
     <PersonalInformationPage />
     <SettingsPage />
     <AboutUsPage />
    </>
>>>>>>> 72c8bc35884a6ed62d4e81f135d64abdb6b4d8c4
  )
}

export default App