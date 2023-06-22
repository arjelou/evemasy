import { Route, Routes } from "react-router-dom";
import { Home,CreateEvents } from "./pages";

export default function App() {
  return (
   <>
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/events" element={<CreateEvents />} />
    </Routes>
   </>
  )
}
