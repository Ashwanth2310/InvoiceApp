import React from 'react';
import { UserButton } from "@clerk/clerk-react";
import "./Upload.css"

export default function Dashboard() {
  return (
    <>
    <header>
        <UserButton />
      </header>
    <div className="dashboard-container">
      
      <main>
        <h1>Upload Invoice</h1>
        <button className="camera-button">Open Camera</button>
      </main>
    </div>
    </>
  );
}