import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <a
            className="App-link"
            href="https://www.shecodes.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} className="App-logo img-fluid" alt="logo" />
          </a>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          This project was coded by Jéssica Pintado, and is{" "}
          <a
            className="GitHub repo"
            href="https://github.com/jdmpintado/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-source
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
