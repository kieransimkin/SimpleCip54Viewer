import './App.css';
import { SmartNFTPortal } from 'smartnftportal';
import smartImport from './smartImport.json';
import metadata from './metadata.json';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SmartNFTPortal style={{width:'100vw',height:'100vh', borderWidth:'0px'}} smartImports={smartImport} metadata={metadata} loading={false} />
      </header>
    </div>
  );
}

export default App;
