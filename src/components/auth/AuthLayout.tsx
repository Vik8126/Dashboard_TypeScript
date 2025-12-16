import React from "react";
import vreLogo from "../../assets/Images/2498755.jpg";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-muted flex items-center justify-center p-4">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Branding */}
        <div className="flex flex-col items-center justify-center space-y-6 lg:pr-8">
          <div className="flex items-center space-x-3">
            <img src={vreLogo} alt="image" />
          </div>
          
          <p className="text-center text-muted-foreground max-w-md">
            Virtual Real Event is a virtual event platform built for an enhanced experience and digital excellence
          </p>
        </div>

        {/* Right side - Auth Form */}
        <div className="flex justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;