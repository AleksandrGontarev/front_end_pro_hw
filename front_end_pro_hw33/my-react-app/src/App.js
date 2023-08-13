import './App.css';
import Head from './head';
import Sidebar from './sidebar';
import Body from './body';

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
