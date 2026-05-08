"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/app/config/firebaseConfig";
import { useState } from "react";

export default function GoogleAuthButton() {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      // Auto-fill form fields (this would ideally interact with a state manager or form ref)
      // For now, we can use events or a shared context if needed, 
      // but the simplest is just to show a success state.
      console.log("Logged in as:", user.displayName);
      
      // Dispatch custom event to fill the form
      const event = new CustomEvent('google-login-success', { 
        detail: { 
          name: user.displayName, 
          email: user.email 
        } 
      });
      window.dispatchEvent(event);

    } catch (error) {
      console.error("Error with Google Sign-In:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleSignIn}
      disabled={loading}
      className="flex w-full items-center justify-center gap-3 rounded-2xl border border-neutral-200 bg-white px-6 py-4 text-sm font-bold text-neutral-900 transition hover:bg-neutral-50 active:scale-[0.98] disabled:opacity-50"
    >
      {loading ? (
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-900" />
      ) : (
        <>
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="h-5 w-5" />
          Continuar con Google
        </>
      )}
    </button>
  );
}
