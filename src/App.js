import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<mainView/>}/>
      </Routes>
    </>
  );
}

export default App;
