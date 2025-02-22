import './App.css';
import Image from './ImageProcess';
import Header from './Header';
import Camera from './Camera';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <div className="App-body">
        <Camera />
        
      </div>

      <div className="App-footer">
      <Image />
      </div>
      
      
    </div>
  );
}

export default App;
