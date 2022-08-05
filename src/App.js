import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Socials from './components/Socials';
import Footer from './components/Footer';

function App() {
  return (
    <div className='site-body'>
      <Header />
      <Socials />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
