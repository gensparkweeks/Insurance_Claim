import './App.css';
import Claim from './components/Claim';
import Footer from './components/Footer';
import Header from './components/Header';
import {Link} from 'react-router-dom' 
import Bridge from './components/Bridge';
import Router from './components/Router';

function App() {
  return (
    <div className="App">
        <Header />

        <Router />

        <Footer />
    </div>
  );
}

export default App;
