// src/components/Auth.tsx
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../supabaseClient";

const AuthComponent = () => {
  return (
    <div className="min-h-screen bg-[#1e3a8a] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">LegalConsult AI</h1>
          <p className="text-blue-200 text-sm">
            Secure access to AI-driven legal guidance
          </p>
        </div>

        {/* Auth Container */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              style: {
                container: {
                  width: '100%',
                },
                button: {
                  width: '100%',
                  padding: '0.75rem 1rem',
                  background: '#1e3a8a',
                  color: 'white',
                  borderRadius: '0.375rem',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    opacity: 0.9,
                  },
                },
                anchor: {
                  color: '#1e3a8a',
                  fontWeight: '500',
                },
                input: {
                  padding: '0.75rem 1rem',
                  borderRadius: '0.375rem',
                  border: '1px solid #e2e8f0',
                  width: '100%',
                  marginBottom: '1rem',
                },
                label: {
                  color: '#4a5568',
                  fontWeight: '500',
                  marginBottom: '0.5rem',
                  display: 'block',
                },
                message: {
                  color: '#4a5568',
                  marginBottom: '1rem',
                  fontSize: '0.875rem',
                },
                divider: {
                  margin: '1.5rem 0',
                  borderColor: '#e2e8f0',
                },
              },
              variables: {
                default: {
                  colors: {
                    brand: '#1e3a8a',
                    brandAccent: '#2563eb',
                    inputBackground: 'white',
                    inputBorder: '#e2e8f0',
                    inputBorderHover: '#2563eb',
                    inputBorderFocus: '#2563eb',
                  },
                  borderWidths: {
                    inputBorderWidth: '1px',
                  },
                  radii: {
                    borderRadiusButton: '0.375rem',
                    buttonBorderRadius: '0.375rem',
                    inputBorderRadius: '0.375rem',
                  },
                },
              },
            }}
            theme="default"
            providers={[]}
          />
        </div>

        {/* Footer */}
        <div className="text-center mt-6 space-y-2">
          <p className="text-blue-200 text-sm">
            By signing in, you agree to our{' '}
            <a href="#" className="underline hover:text-white">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="underline hover:text-white">Privacy Policy</a>
          </p>
          <p className="text-blue-200 text-sm">
            Need help?{' '}
            <a href="#" className="underline hover:text-white">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;