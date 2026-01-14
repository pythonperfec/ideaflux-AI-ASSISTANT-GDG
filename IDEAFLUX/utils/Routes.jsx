import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import PitchDetails from './pages/pitch-details';
import AnalyticsDashboard from './pages/analytics-dashboard';
import PitchCreator from './pages/pitch-creator';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Register from './pages/register';
import PitchDetector from './pages/pitch-detector';
import CustomerTrustAnalysis from './pages/customer-trust-analysis';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Login />} />
        <Route path="/pitch-details" element={<PitchDetails />} />
        <Route path="/analytics-dashboard" element={<AnalyticsDashboard />} />
        <Route path="/pitch-creator" element={<PitchCreator />} />
        <Route path="/pitch-detector" element={<PitchDetector />} />
        <Route path="/customer-trust-analysis" element={<CustomerTrustAnalysis />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
