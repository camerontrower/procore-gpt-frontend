import React, { useState } from 'react';

function ProcoreGPTApp({ projectId }) {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:4000/gpt-query', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ projectId, query }),
});

      const data = await res.json();
      setResponse(data.answer);
    } catch (err) {
      setResponse('Error: ' + err.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Procore GPT Assistant</h2>
      <textarea
        rows={4}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask about your project..."
        style={{ width: '100%' }}
      />
      <button onClick={handleSubmit} disabled={loading || !query.trim()}>
        {loading ? 'Thinking...' : 'Ask GPT'}
      </button>
      {response && (
        <div style={{ marginTop: 20, backgroundColor: '#f3f3f3', padding: 10 }}>
          <strong>GPT Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default ProcoreGPTApp;