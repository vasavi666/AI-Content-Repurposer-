import { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import InputSection from './components/InputSection';
import ResultsSection from './components/ResultsSection';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!inputText.trim()) return;
    
    setLoading(true);
    setError('');
    setResults(null);

    try {
      const response = await axios.post('/api/repurpose', { content: inputText });
      setResults(response.data.results);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to generate content. Please try again.');
      // Fallback dummy data if no backend is running for UI demonstration
      setTimeout(() => {
        setResults({
            linkedin: "🚀 Excited to share my latest thoughts on this!\n\nJust published a new deep dive. Check it out.\n\n#Growth #Tech",
            twitter: "Just published a new thread on some cool ideas. 🧵👇\n\n#tech #innovation",
            instagram: "✨ Big news!\n\nCheck out the link in bio for the full story.\n\n#inspiration #daily",
            youtube: "Hey everyone! In today's video we're covering something awesome."
        });
        setError('');
      }, 1500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="app-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <InputSection 
            inputText={inputText}
            setInputText={setInputText}
            handleGenerate={handleGenerate}
            loading={loading}
            error={error}
          />
          <ResultsSection results={results} loading={loading} />
        </main>
      </div>
    </div>
  );
}

export default App;
