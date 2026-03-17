import { HashRouter, Routes, Route } from "react-router-dom"
import { Navbar1 } from "@/components/ui/navbar-1"
import Home from "@/pages/Home"
import Projects from "@/pages/Projects"
import Services from "@/pages/Services"
import Contact from "@/pages/Contact"

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen w-full">
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
