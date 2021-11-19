import {useState} from 'react';
import './App.css';
import Dictionary from './components/Dictionary';
import Definition from './components/Definition';
import Highlighter from './components/SyntaxHighlighter';
import GeoLocator from './components/GeoLocator';

function App() {
  const [text, settext] = useState("I love to play football with my blue pants and monkey in the bin")
  return (
    <div className="App">
      <div>
        <Definition>Oat Milk</Definition>
      </div>
        <textarea rows={5} cols={50} value={text} onChange={e => settext(e.target.value)} />
      <div>
        <Highlighter>{text}</Highlighter>
      </div>
      <Dictionary />
      {/* <GeoLocator /> */}
    </div>
  );
}

export default App;
