
import React from 'react'

interface LogoProps {
  className?: string
  showText?: boolean
  variant?: 'default' | 'white' | 'icon'
}

const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  showText = true, 
  variant = 'default' 
}) => {
  const isWhite = variant === 'white'
  const isIcon = variant === 'icon'
  
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon */}
      <div className="relative">
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 40 40" 
          className="transition-transform duration-300 hover:scale-110"
        >
          <defs>
            {/* Trust-Forge Gradient */}
            <linearGradient id="trustForgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isWhite ? "#60A5FA" : "#1E40AF"} />
              <stop offset="50%" stopColor={isWhite ? "#3B82F6" : "#2563EB"} />
              <stop offset="100%" stopColor={isWhite ? "#F97316" : "#EA580C"} />
            </linearGradient>
            
            {/* Forge Glow */}
            <radialGradient id="forgeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
            </radialGradient>
            
            {/* Trust Ripple */}
            <radialGradient id="trustRipple" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Background Glow Effects */}
          <circle cx="20" cy="20" r="18" fill="url(#trustRipple)" className="animate-pulse" />
          <circle cx="20" cy="20" r="15" fill="url(#forgeGlow)" className="animate-pulse" style={{animationDelay: '0.5s'}} />
          
          {/* Main Shield/Diamond Shape */}
          <path 
            d="M20 4 L32 12 L32 28 L20 36 L8 28 L8 12 Z" 
            fill="url(#trustForgeGradient)"
            className="drop-shadow-lg"
          />
          
          {/* Inner Forge Diamond */}
          <path 
            d="M20 8 L28 14 L28 26 L20 32 L12 26 L12 14 Z" 
            fill={isWhite ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.15)"}
            stroke={isWhite ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.3)"}
            strokeWidth="1"
          />
          
          {/* Trust Validation Lines */}
          <g stroke={isWhite ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.5)"} strokeWidth="1.5" fill="none">
            <line x1="15" y1="16" x2="25" y2="16" className="animate-pulse" />
            <line x1="15" y1="20" x2="25" y2="20" className="animate-pulse" style={{animationDelay: '0.2s'}} />
            <line x1="15" y1="24" x2="25" y2="24" className="animate-pulse" style={{animationDelay: '0.4s'}} />
          </g>
          
          {/* Forge Particles */}
          <g fill={isWhite ? "#FCD34D" : "#F59E0B"}>
            <circle cx="30" cy="10" r="1" className="animate-bounce" style={{animationDelay: '0s'}} />
            <circle cx="34" cy="15" r="0.8" className="animate-bounce" style={{animationDelay: '0.3s'}} />
            <circle cx="32" cy="8" r="0.6" className="animate-bounce" style={{animationDelay: '0.6s'}} />
            <circle cx="6" cy="12" r="1" className="animate-bounce" style={{animationDelay: '0.9s'}} />
            <circle cx="10" cy="8" r="0.8" className="animate-bounce" style={{animationDelay: '1.2s'}} />
          </g>
        </svg>
      </div>
      
      {/* Logo Text */}
      {showText && !isIcon && (
        <div className="flex flex-col">
          <span className={`text-xl font-bold leading-none ${
            isWhite ? 'text-white' : 'text-slate-900'
          }`}>
            TrustForge
          </span>
          <span className={`text-sm font-medium leading-none ${
            isWhite ? 'text-blue-200' : 'text-orange-600'
          }`}>
            AI
          </span>
        </div>
      )}
    </div>
  )
}

export default Logo
