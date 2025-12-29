/**
 * Error Boundary Component
 * Provides graceful error handling for the entire application
 */

import React, { ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-background text-text-primary">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-bold mb-4">Något gick fel</h1>
            <p className="text-text-secondary mb-8">
              Vi ursäktar, men något oväntat inträffade. Försök att ladda om sidan.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-accent text-white px-6 py-3 rounded-none hover:bg-accent-hover transition-colors font-semibold"
            >
              Ladda om sidan
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
