import React from 'react';
import ProcoreGPTApp from './components/ProcoreGPTApp';

function App() {
  // Replace with actual Procore project ID later
  const projectId = '12345';

  return (
    <div>
      <ProcoreGPTApp projectId={projectId} />
    </div>
  );
}

export default App;