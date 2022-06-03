import React from 'react'
import ReactDOM from 'react-dom/client'

import useDarkMode from './useDarkMode'

function App() {
  console.log('run App')
  const [isDark, setIsDark] = useDarkMode(false);
  const toggleMode = () => setIsDark(!isDark);
  return (
    <div className="App">
      <button onClick={toggleMode}>Toggle Mode</button>
      <p>The current theme is: {isDark ? 'Dark' : 'Light'}</p>
    </div>
  );
}

export default App;

console.log('App', App)

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />)