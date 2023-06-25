import { Route, Routes } from "react-router-dom";
import { Home, Login, Signup } from "./pages";
import Dashboard from "./pages/UserDashboard/dashboard";

import AddNewEvent from "./pages/UserDashboard/components/createEvents";
import ListEvent from "./pages/UserDashboard/components/listEvents";


export default function App() {
  return (
   <>
    <Routes>
      <Route path="" element={<Home />} />

      {/* Login/Signup route */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* User Dashboard */}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="add-event" element={<AddNewEvent />} />
        <Route path="event-lists" element={<ListEvent />} />
      </Route>

    </Routes>
   </>
  )
}
