// components/LoadingAdvanced.jsx
"use client";
import { useEffect, useState } from "react";

export default function LoadingAdvanced({ timeout = 8000 }) {
  const [progress, setProgress] = useState(0);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowError(true), timeout);
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 10, 90));
    }, 300);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [timeout]);

  return (
    <div className="text-center p-8">
      {!showError ? (
        <>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-gray-500">Carregando recursos...</p>
        </>
      ) : (
        <div className="text-red-500">
          <p>O carregamento está demorando mais que o normal.</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-4 py-2 bg-red-100 rounded"
          >
            Tentar novamente
          </button>
        </div>
      )}
    </div>
  );
}
