import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.page";
import MasterPage from "./pages/Master.page";
import NoPage from "./pages/No.page";

function App() {
  return (
    <>
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/:type" element={<MasterPage />} />
         <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
};

export default App;
