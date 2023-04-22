import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Header/>
      <hr/>
      <Search/>
      <hr/>
      <br/>
      <br/>
      <Form/>
      <hr/>
      <Table/>
    </div>
  );
}

export default App;
