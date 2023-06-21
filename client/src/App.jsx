import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import CreateEvents from "./pages/createEvents";

export default function App() {
  return (
   <>
    <Routes>
      <Route path="" element={<Header />} />
      <Route path="/events" element={<CreateEvents />} />
    </Routes>
   </>
  )
}
