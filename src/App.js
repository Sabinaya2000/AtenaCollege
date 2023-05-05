import logo from './logo.svg';
import './App.css';

import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import'./assets/scss/style.scss';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <>
     <Header/>
     <ScrollToTop/>
     <Footer/>
    </>
  );
}

export default App;
