import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Signin from './Signin';
import Dashboard from './Upload';
import './App.css';
import { SignIn, SignUp } from "@clerk/clerk-react";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <SignedIn>
              <Navigate to="/upload" replace />
            </SignedIn>
            <SignedOut>
              <Signin />
            </SignedOut>
          </>
        } />
        <Route
          path="/upload"
          element={
            <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        
        <Route 
          path="/sign-in/*"
          element={<SignIn routing="path" path="/sign-in" />}
        />
        <Route 
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        
        <Route 
          path="/*"
          element={<SignIn routing="path" path="/" />}
        />
      </Routes>
    </Router>
  );
}