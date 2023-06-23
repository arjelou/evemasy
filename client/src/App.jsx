import { Route, Routes } from "react-router-dom";
import { Home,CreateEvents } from "./pages/UserDashboard";
import Login from "./pages/login";
import Signup from "./pages/singup";


export default function App() {
  return (
   <>
    <Routes>
      
      <Route path="" element={<Home />}>
        <Route path="/events" element={<CreateEvents />} />
      </Route>

      {/* Login/Signup route */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

    </Routes>
   </>
  )
}
