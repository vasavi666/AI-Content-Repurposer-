import { FaWandMagicSparkles } from 'react-icons/fa6';
import './InputSection.css';

const InputSection = ({ inputText, setInputText, handleGenerate, loading, error }) => {
  const maxLength = 10000;

  return (
    <section className="input-section">
      <label className="input-section-label">
        📝 Your Content
      </label>
      <textarea
        className="input-textarea"
        rows={8}
        placeholder="Paste your blog post, article, or any content here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        maxLength={maxLength}
      />
      
      {error && <div className="error-message">{error}</div>}
      
      <div className="input-footer">
        <span className="char-count">
          {inputText.length.toLocaleString()} / {maxLength.toLocaleString()}
        </span>
        
        <button 
          className="generate-btn"
          onClick={handleGenerate}
          disabled={loading || inputText.length === 0}
        >
          {loading ? (
            <>
              <span className="spinner"></span>
              Generating...
            </>
          ) : (
            <>
              <FaWandMagicSparkles /> ✨ Generate Content
            </>
          )}
        </button>
      </div>
    </section>
  );
};

export default InputSection;
