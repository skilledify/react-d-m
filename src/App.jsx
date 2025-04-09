import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import PreOwnedCars from "./pages/PreOwnedCars";
import Finance from "./pages/Finance";
import LeaseVsBuy from "./pages/LeaseVsBuy";





export default function App() {
  return (
    <Router basename="/react-d-m">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/preownedcars" element={<PreOwnedCars />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/leasevsbuy" element={<LeaseVsBuy />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}




