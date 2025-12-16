import React, { useState } from "react";
import AuthLayout from "./AuthLayout";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import ForgotPasswordForm from "./ForgotPasswordForm";

type AuthView = "login" | "signup" | "forgot-password";

const AuthContainer: React.FC = () => {
  const [currentView, setCurrentView] = useState<AuthView>("login");

  const renderCurrentView = () => {
    switch (currentView) {
      case "login":
        return (
          <LoginForm
            onSwitchToSignUp={() => setCurrentView("signup")}
            onSwitchToForgotPassword={() => setCurrentView("forgot-password")}
          />
        );
      case "signup":
        return (
          <SignUpForm
            onSwitchToLogin={() => setCurrentView("login")}
          />
        );
      case "forgot-password":
        return (
          <ForgotPasswordForm
            onBack={() => setCurrentView("login")}
          />
        );
      default:
        return null;
    }
  };

  return (
    <AuthLayout>
      {renderCurrentView()}
    </AuthLayout>
  );
};

export default AuthContainer;