import 'normalize.css';
import './assets/styles/App.css';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
