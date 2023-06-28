import { SmartNFTPortal } from 'smartnftportal';
import smartImport from './smartImport.json';
import metadata from './metadata.json';
function App() {
  return (
    <div style={{textAlign: 'center'}}>
      <header style={{backgroundColor: '#282c34',minHeight:'100vh',display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',fontSize: 'calc(10px + 2vmin)',color: 'white'}}>
        <SmartNFTPortal style={{width:'100vw',height:'100vh', borderWidth:'0px'}} smartImports={smartImport} metadata={metadata} loading={false} />
      </header>
    </div>
  );
}

export default App;
