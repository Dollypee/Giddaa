import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import Login from "./pages/auth/Login";
import AdminDashboardLayout from "./layouts/AdminDashboardLayout";
import Home from "./pages/Home";
import ProtectedRoute from "./pages/auth/ProtectedRoute";
import Transactions from "./pages/admin/transactions";

// Import other components for routes

const AppRouter = () => (
  <Router>
    <Routes>

      {/* Routes not needing authentication */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Routes needing authentication */}
      <Route
        path="admin"
        element={<ProtectedRoute>
          <AdminDashboardLayout>
            <Outlet />
          </AdminDashboardLayout>
        </ProtectedRoute>}
      >
        <Route path="transactions" element={<Transactions />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Router>
);

export default AppRouter;
