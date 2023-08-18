import './App.css';
import Head from './components/head';
import Sidebar from './components/Sidebar';
import Body from './components/Body';

const App = () =>  {
  return (
    <div className="App">
      <Head />
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
