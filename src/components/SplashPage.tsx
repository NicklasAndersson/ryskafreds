import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SplashPage = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const targetUrl = state?.targetUrl || '/'; // Default to home if no targetUrl

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = targetUrl; // Redirect after 5 seconds
    }, 5000);

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, [targetUrl, navigate]);

  const handleManualRedirect = () => {
    window.location.href = targetUrl;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-text-primary p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Vänligen vänta...</h1>
      <p className="text-xl mb-8">Du skickas nu vidare till vår systerorganisation.</p>
      <p className="text-lg mb-8">Omdirigering sker automatiskt om {countdown} sekunder.</p>
      <button
        onClick={handleManualRedirect}
        className="bg-accent text-white px-6 py-3 rounded-none hover:bg-accent-hover transition-colors font-semibold"
      >
        Klicka här om du inte skickas vidare automatiskt
      </button>
    </div>
  );
};

export default SplashPage;