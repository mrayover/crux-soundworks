import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import './index.css';

import Layout from './components/Layout';
import WorksIndex from './pages/WorksIndex';
import WorkDetail from './pages/WorkDetail';
import AdminAddWork from './pages/AdminAddWork';
import Calendar from './pages/Calendar';

import Login from './pages/admin/Login';
import ComposerDashboard from './pages/admin/ComposerDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import AdminIndex from './pages/admin/AdminIndex';

import CruxWorks from './pages/CruxWorks/index';
import FresnoComposersSociety from './pages/FresnoComposersSociety/index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/works" element={<WorksIndex />} />
          <Route path="/works/:slug" element={<WorkDetail />} />
          <Route path="/calendar" element={<Calendar />} />

          {/* Admin */}
          <Route path="/admin/add-work" element={<AdminAddWork />} />
          <Route path="/admin" element={<AdminIndex />} />
          <Route path="/admin/composer/login" element={<Login />} />
          <Route
            path="/admin/composer"
            element={
              <ProtectedRoute>
                <ComposerDashboard />
              </ProtectedRoute>
            }
          />

          {/* NEW ROUTES */}
          <Route path="/cruxworks" element={<CruxWorks />} />
          <Route path="/fresnocomposersociety" element={<FresnoComposersSociety />} />
          <Route path="/fresno" element={<Navigate to="/fresnocomposersociety" />} />
          <Route path="/fcs" element={<Navigate to="/fresnocomposersociety" />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
