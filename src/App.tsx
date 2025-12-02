import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import ServiceDetails from "./componant/ServiceDetails"; // keep your existing component
import MultiStepForm from "./componant/MultiStepForm";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/multi-step-form" element={<MultiStepForm />} />
      </Routes>
    </Router>
  );
};

export default App;
