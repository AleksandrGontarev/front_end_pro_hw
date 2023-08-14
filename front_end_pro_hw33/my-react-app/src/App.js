import './App.css';
import Head from './components/head';
import Sidebar from './components/sidebar';
import Body from './components/body';

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
