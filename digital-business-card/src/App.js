import marvImage from './marvimage.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={marvImage} className="App-profImage" alt="profImage" />
        <h3>
          Marvin Kamwenji Murage
        </h3>
        <p>
          Software Engineer and Quality Assurance
        </p>
        <p>
          marvinkamwenji.website
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
