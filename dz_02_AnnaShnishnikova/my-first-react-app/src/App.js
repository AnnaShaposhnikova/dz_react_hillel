
import './App.css';
import './components/header/Header'
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">      
      <Header />
      <Content />
      <Footer />      
    </div>
  );
}

export default App;
