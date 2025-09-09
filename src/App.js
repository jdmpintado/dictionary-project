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
          This project was coded by{" "}
          <a
            className="GitHub portfolio"
            href="https://github.com/jdmpintado"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jéssica Pintado
          </a>
          , is{" "}
          <a
            className="GitHub repo"
            href="https://github.com/jdmpintado/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
          , and{" "}
          <a
            className="Netlify page URL"
            href="https://effulgent-narwhal-1978a5.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
