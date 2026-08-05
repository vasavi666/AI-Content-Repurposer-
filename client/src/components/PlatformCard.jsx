import { useState } from 'react';
import './PlatformCard.css';

const PlatformCard = ({ platform, content, icon: Icon, color, gradient, delayIndex }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const accentStyle = gradient 
    ? { background: gradient } 
    : { background: color };

  const iconStyle = gradient
    ? { fill: 'url(#ig-grad)', color: '#e6683c' } // Fallback color
    : { color: color };

  return (
    <div className="platform-card" style={{ '--delay': `${delayIndex * 0.1}s` }}>
      <div className="platform-card-accent" style={accentStyle}></div>
      
      {/* SVG Gradient definition for Instagram icon */}
      {gradient && (
        <svg width="0" height="0">
          <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="25%" stopColor="#e6683c" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="75%" stopColor="#cc2366" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </svg>
      )}

      <div className="platform-card-header">
        <div className="platform-icon" style={iconStyle}>
          <Icon style={gradient ? { fill: 'url(#ig-grad)' } : {}} />
        </div>
        <div className="platform-name">{platform}</div>
      </div>
      
      <div className="platform-card-content">
        <p>{content}</p>
      </div>
      
      <div className="platform-card-footer">
        <button 
          className={`copy-btn ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
        >
          {copied ? 'Copied!' : 'Copy to Clipboard'}
        </button>
      </div>
    </div>
  );
};

export default PlatformCard;
