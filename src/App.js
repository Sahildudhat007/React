import './App.css';
import Para from './Component/Para';
// import Para from './Component/Para';
// import {Para1} from './Component/Para';
import Head from './Component/Head';
// import {Head1} from './Component/Head';
import Img from './Component/Img';
import List from './Component/List';

function App() {
  return (
    <div className="App">
        <Head/>
        {/* <Head1/> */}
        <Para/>
        {/* <Para/>
        <Para1/> */}
        <Img/>
        <List/>
    </div>
  );
}

export default App;
