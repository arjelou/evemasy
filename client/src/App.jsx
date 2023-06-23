import { Route, Routes } from "react-router-dom";
import { Home, Login, Signup } from "./pages";
import UserDashboard from "./pages/UserDashboard/dashboard";

import AddNewEvent from "./pages/UserDashboard/components/createEvents";


export default function App() {
  return (
   <>
    <Routes>
      
      <Route path="" element={<Home />} />

      {/* Login/Signup route */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* User Dashboard */}
      <Route path="/dashboard" element={<UserDashboard />}>
        <Route path="add-event" element={<AddNewEvent />} />
      </Route>

    </Routes>
   </>
  )
}
