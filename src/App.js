import { useState, useEffect } from 'react'
import Header from './components/Header'
import Photo from './components/Photo'

function App() {
  const [showPhoto, setShowPhoto] = useState(false);
  const [red, setRed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setRed(!red), 300);

    return () => {
      clearInterval(interval);
    }
  }, [red]);

  const togglePhoto = () => {
    setShowPhoto(!showPhoto);
  };

  return (
    <div className="App">
      <Header 
        title={`Happy Mother's Day`}
        onClick={togglePhoto}
        color={red ? 'red' : 'white'}
      />
      { showPhoto && <Photo /> }
    </div>
  );
}

export default App;
