import 'normalize.css';
import './assets/styles/App.css';
import Header from './components/Header/Header.jsx';
import WordsTable from './components/WordsTable/WordsTable';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <WordsTable></WordsTable>
    </div>
  );
}

export default App;
