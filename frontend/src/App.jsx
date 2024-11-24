import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import { ComicProvider } from "./context/ComicContext";
import Navbar from "./components/Navbar";
 
import ComicFormPage from "./pages/ComicFormPage";
import ComicPage from "./pages/ComicPage";
import ComicsPage from "./pages/ComicsPage";



function App() {
  return (
    <AuthProvider>
      <ComicProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<h1>home page</h1>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/comics" element={ <ComicsPage /> }/>
              <Route path="/add-comic" element={ <ComicFormPage /> } />
              <Route path="/" element={<h1>update comic</h1>} />
              <Route path="/" element={<h1>profile page</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ComicProvider>
    </AuthProvider>
  );
}

export default App;
