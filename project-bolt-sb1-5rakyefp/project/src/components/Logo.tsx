import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => {
  return (
    <div className={`${className} relative`}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background circle with gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E5E7EB" />
          </linearGradient>
        </defs>
        
        {/* Main circle background */}
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="url(#logoGradient)"
          stroke="#1E40AF"
          strokeWidth="2"
        />
        
        {/* Inner decorative ring */}
        <circle
          cx="20"
          cy="20"
          r="14"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="0.5"
          opacity="0.6"
        />
        
        {/* ADM Text */}
        <text
          x="20"
          y="26"
          textAnchor="middle"
          fill="url(#textGradient)"
          fontSize="12"
          fontWeight="bold"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          ADM
        </text>
        
        {/* Top accent dot */}
        <circle
          cx="20"
          cy="8"
          r="1.5"
          fill="#60A5FA"
        />
        
        {/* Side accent elements */}
        <path
          d="M8 20 L12 20"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M28 20 L32 20"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Logo;