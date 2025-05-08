import { Routes, Route } from 'react-router-dom';

import Home     from './pages/Home/Home.jsx';
import Projects from './pages/Projects/Projects.jsx';

export default function App() {
  return (
    <>
      <main className="px-4 py-8 max-w-4xl mx-auto">
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </>
  );
}
