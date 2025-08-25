import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import ErrorBoundary from './components/ErrorBoundary'
import { AuthProvider } from './context/AuthContext'

// Import all page components
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Give from './pages/Give'
import Leadership from './pages/Leadership'
import Live from './pages/Live'
import Ministries from './pages/Ministries'
import Services from './pages/Services'

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/education" element={<Education />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/live" element={<Live />} />
            <Route path="/give" element={<Give />} />
            <Route path="/contact" element={<Contact />} />
            {/* 404 fallback */}
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
                  <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
                  <a href="/" className="btn-primary">Return Home</a>
                </div>
              </div>
            } />
          </Routes>
        </Layout>
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App