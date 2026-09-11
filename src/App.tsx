import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Rules } from "./pages/Rules";
import { Guides } from "./pages/Guides";
import { Faq } from "./pages/Faq";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gioi-thieu" element={<About />} />
          <Route path="quy-dinh" element={<Rules />} />
          <Route path="huong-dan" element={<Guides />} />
          <Route path="faq" element={<Faq />} />
          <Route path="lien-he" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

