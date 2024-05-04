<<<<<<< HEAD
import HomePage from "./Pages/HomePage"
import PersonalInformationPage from "./Pages/PersonalInformationPage"
import SettingsPage from "./Pages/SettingsPage"
import { BrowserRouter, Routes,Route} from "react-router-dom"
import ShopPage from "./Pages/ShopPage"

=======
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopPage from "./Pages/ShopPage";
import PersonalInformationPage from "./Pages/PersonalInformationPage";
import SettingsPage from "./Pages/SettingsPage";
import AboutUsPage from "./Pages/AboutUsPage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
>>>>>>> cb5464aeb09376d56f7a1de3141c410ff9ef82ae

function App() {
  return (
<<<<<<< HEAD
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/settingsPage" element={<SettingsPage />} />
       <Route path="/personal-information" element={<PersonalInformationPage />} />
       <Route path="/shopPage" element={<ShopPage />}/> 
     </Routes>
   </BrowserRouter>

  )
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/personal-information" element={<PersonalInformationPage />} />
        <Route path="/shopPage" element={<ShopPage />} />
        <Route path="/aboutUsPage" element={<AboutUsPage />} />
        <Route path="/SignInPage" element={<SignInPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
      </Routes>
      <SignInPage />
    </BrowserRouter>
  );
>>>>>>> cb5464aeb09376d56f7a1de3141c410ff9ef82ae
}

export default App;
