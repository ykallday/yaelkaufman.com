import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer'
import './App.css';
function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
     
      <main>
       <Main />
      </main>
      
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
