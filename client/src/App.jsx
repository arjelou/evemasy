import { Route, Routes } from "react-router-dom";
import { Header,CreateEvents } from "./pages";

export default function App() {
  return (
   <>
    <Routes>
      <Route path="" element={<Header />} />
      <Route path="/events" element={< CreateEvents />} />
    </Routes>
   </>
  )
}
