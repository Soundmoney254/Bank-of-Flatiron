import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Header/>
      <hr/>
      <Search/>
      <hr/>
      <Form/>
    </div>
  );
}

export default App;
