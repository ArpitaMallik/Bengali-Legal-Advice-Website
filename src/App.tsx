// src/App.tsx
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import supabase from "./supabaseClient";
import type { Session } from "@supabase/supabase-js";

import Header from "./components/Header";
import Footer from "./components/Footer";
import UserMode from "./components/UserMode";
import AdminMode from "./components/AdminMode";
import AuthComponent from "./components/Auth";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  // const [session, setSession] = useState<any>(null); // use `any` or import Session type from supabase-js
  const [session, setSession] = useState<Session | null>(null);

  // Load and subscribe to auth state
  useEffect(() => {
    // Get current session
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };

    getSession();

    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // Toggle admin/user mode
  const toggleAdminMode = () => {
    setIsAdmin((prev) => !prev);
  };

  // Logout handler
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAdmin(false); // Optional: reset to user mode on logout
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header
          isAdmin={isAdmin}
          toggleAdminMode={toggleAdminMode}
          onLogout={handleLogout}
          showLogout={!!session}
        />

        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {!session ? (
              <AuthComponent />
            ) : (
              <>
                {/* User Mode */}
                <div
                  className={`transition-all duration-500 ${
                    isAdmin ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
                  }`}
                >
                  {!isAdmin && <UserMode />}
                </div>

                {/* Admin Mode */}
                <div
                  className={`transition-all duration-500 ${
                    !isAdmin ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
                  }`}
                >
                  {isAdmin && <AdminMode />}
                </div>
              </>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
