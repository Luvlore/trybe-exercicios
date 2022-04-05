import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';

function App() {
  return (<>
    <Header />
    <div className='contents'>
      <Content />
    </div>
    <Footer />
  </>);
}

export default App;
