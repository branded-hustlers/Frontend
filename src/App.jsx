import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopPage from "./Pages/ShopPage";
import PersonalInformationPage from "./Pages/PersonalInformationPage";
import SettingsPage from "./Pages/SettingsPage";
import AboutUsPage from "./Pages/AboutUsPage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import HelpFeedbackPage from "./Pages/HelpFeedbackPage";
import WishlistPage from "./Pages/WishlistPage";
import AddressesPage from "./Pages/AddressesPage";
import OrdersPage from "./Pages/OrdersPage";
import PaymentMethodsPage from "./Pages/PaymentMethodsPage";
import PurchaseHistoryPage from "./Pages/PurchaseHistoryPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settingsPage" element={<SettingsPage />} />
        <Route path="/purchaseHistoryPage" element={<PurchaseHistoryPage />} />
        <Route path="/personalInformationPage" element={<PersonalInformationPage />} />
        <Route path="/shopPage" element={<ShopPage />} />
        <Route path="/helpFeedbackPage" element={<HelpFeedbackPage />} />
        <Route path="/WishlistPage" element={<WishlistPage />} />
        <Route path="/AddressesPage" element={<AddressesPage />} />
        <Route path="/OrdersPage" element={<OrdersPage />} />
        <Route path="/PaymentMethodsPage" element={<PaymentMethodsPage />} />
        <Route path="/aboutUsPage" element={<AboutUsPage />} />
        <Route path="/SignInPage" element={<SignInPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
