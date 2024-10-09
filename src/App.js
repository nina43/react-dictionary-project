import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">Dictionary</h1>
        <h3 className="text-center">Search for a definition</h3>
        <Dictionary />
      </div>
      <footer className="app-footer">
        Coded by Martyna Ziarek and is open-sourced on{" "}
        <a href="https://github.com/nina43/react-dictionary-project">GitHub</a>
      </footer>
    </div>
  );
}
