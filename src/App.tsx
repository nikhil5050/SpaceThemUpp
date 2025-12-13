import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";

import MultiStepForm from "./componant/MultiStepForm";
import ServiceDetails from "./components/ServiceDetails"; 
import ServiceDetailPage from "./components/ServiceDetailPage";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<ServiceDetails />} />
        {/* The :id part makes it dynamic */}
        <Route path="/services/:id" element={<ServiceDetailPage />} />
        <Route path="/multi-step-form" element={<MultiStepForm />} />
      </Routes>
    </Router>
  );
};

export default App;
