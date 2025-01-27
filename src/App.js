import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CommentsPage from "./pages/CommentsPage";
import ErrorPage from "./components/ErrorPage";
import AgriculteursPage from "./pages/AgriculteursPage";
import ClientsPage from "./pages/ClientsPage";
import FournisseursPage from "./pages/FournisseursPage";
import TransporteursPage from "./pages/TransporteursPage";
import AgronomesPage from "./pages/AgronomesPage";
import ONGPage from "./pages/ONGPage";
import InstitutionsFinancieresPage from "./pages/InstitutionsFinancieresPage";
import DecideursPage from "./pages/DecideursPage";
import AboutPage from "./pages/AboutPage";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/comments" element={<CommentsPage />} />
        <Route path="/agriculteurs" element={<AgriculteursPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/fournisseurs" element={<FournisseursPage />} />
        {/* Routes pour les partenaires */}
        <Route path="/partenaires/transporteurs" element={<TransporteursPage />} />
        <Route path="/partenaires/agronomes" element={<AgronomesPage />} />
        <Route path="/partenaires/ong" element={<ONGPage />} />
        <Route path="/partenaires/institutions-financieres" element={<InstitutionsFinancieresPage />} />
        <Route path="/partenaires/decideurs" element={<DecideursPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
