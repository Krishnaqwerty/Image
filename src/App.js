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
        <Image />
      </div>

      <div className="App-footer">
        <p>Image Processing App</p>
      </div>
      
      
    </div>
  );
}

export default App;
