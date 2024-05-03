import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopPage from "./Pages/ShopPage";
import PersonalInformationPage from "./Pages/PersonalInformationPage";
import SettingsPage from "./Pages/SettingsPage";
import AboutUsPage from "./Pages/AboutUsPage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";

function App() {
  return (
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
}

export default App;
