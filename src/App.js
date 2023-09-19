import 'normalize.css';
import './assets/styles/App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer';
import WordsTable from './components/WordsTable/WordsTable';

import data from './wordsList.json';


function App() {
  return (
    <div className="App">
      <Header></Header>
      {data.map((item) =>
      <WordsTable
      eng={item.english}
      transcription={item.transcription}
      rus={item.russian}
      ></WordsTable>
      )}
      <Footer></Footer>
    </div>
  );
}

export default App;
