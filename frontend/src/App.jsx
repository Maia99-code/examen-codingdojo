import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage"
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>home page</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/comics" element={<h1>comics pages</h1>} />
          <Route path="/" element={<h1>new comic</h1>} />
          <Route path="/" element={<h1>update comic</h1>} />
          <Route path="/" element={<h1>profile page</h1>} />
        </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
