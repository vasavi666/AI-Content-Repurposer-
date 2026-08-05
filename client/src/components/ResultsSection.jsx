import { FaLinkedin, FaXTwitter, FaInstagram, FaYoutube } from 'react-icons/fa6';
import PlatformCard from './PlatformCard';
import './ResultsSection.css';

const ResultsSection = ({ results, loading }) => {
  if (!loading && !results) {
    return (
      <div className="empty-state">
        <p>Enter your content above and generate to see results here.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <section className="results-section">
        <h2 className="results-section-title">✨ Generating Content...</h2>
        <div className="skeleton-grid">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="skeleton-card">
              <div className="skeleton-accent"></div>
              <div className="skeleton-header">
                <div className="skeleton-circle"></div>
                <div className="skeleton-line" style={{ width: '120px' }}></div>
              </div>
              <div className="skeleton-body">
                <div className="skeleton-line" style={{ width: '100%' }}></div>
                <div className="skeleton-line" style={{ width: '90%' }}></div>
                <div className="skeleton-line" style={{ width: '95%' }}></div>
                <div className="skeleton-line" style={{ width: '60%' }}></div>
                <br />
                <div className="skeleton-line" style={{ width: '85%' }}></div>
                <div className="skeleton-line" style={{ width: '75%' }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  const platformsConfigs = [
    { 
      platform: 'LinkedIn', 
      content: results.linkedin, 
      icon: FaLinkedin, 
      color: '#0077B5' 
    },
    { 
      platform: 'Twitter', 
      content: results.twitter, 
      icon: FaXTwitter, 
      color: '#1DA1F2' 
    },
    { 
      platform: 'Instagram', 
      content: results.instagram, 
      icon: FaInstagram, 
      color: 'transparent',
      gradient: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
    },
    { 
      platform: 'YouTube Script', 
      content: results.youtube, 
      icon: FaYoutube, 
      color: '#FF0000' 
    }
  ];

  return (
    <section className="results-section">
      <h2 className="results-section-title">🚀 Your Repurposed Content</h2>
      <div className="results-grid">
        {platformsConfigs.map((config, index) => (
          <PlatformCard 
            key={config.platform}
            {...config}
            delayIndex={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ResultsSection;
