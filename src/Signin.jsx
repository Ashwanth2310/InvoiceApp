import React from 'react';
import { SignIn } from "@clerk/clerk-react";

export default function Signin() {
  return (
    <div className="signin-container">
      <h1>Welcome to the Invoice App</h1>
      <SignIn 
        routing="path" 
        path="/" 
        signInUrl="/"
        fallbackRedirectUrl="/upload"
        appearance={{
          elements: {
            formButtonPrimary: 'signin-button',
            footerActionLink: 'signin-footer-link'
          }
        }}
      />
    </div>
  );
}