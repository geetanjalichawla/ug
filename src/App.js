import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/auth/SiginIn";
import DashBoard from "./pages/admin/DashBoard";

import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import ProtectedRoute from "./pages/auth/ProtectedRoute";

function App() {
  const {loggedIn} = useSelector((state)=>state.auth);
  return (
    <div>
      <Routes>
<Route path="/login" element={<ProtectedRoute isAuthenticated={!loggedIn} redirect={'/admin'}><SignIn/></ProtectedRoute>}/>
<Route path="/admin" element={<ProtectedRoute isAuthenticated={loggedIn} redirect={'/login'}><DashBoard/></ProtectedRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
