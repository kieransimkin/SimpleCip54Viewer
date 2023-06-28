import { SmartNFTPortal } from 'smartnftportal';
import smartImport from './smartImport.json';
import metadata from './metadata.json';

function App() {
  const isTemplate = false;
 const umetadata = isTemplate?{'%%METADATA_TEMPLATE%%':''}:metadata
 const usmartImport = isTemplate?{'%%SMARTIMPORT_TEMPLATE%%':''}:smartImport

  return (
    <div style={{textAlign: 'center'}}>
      <header style={{backgroundColor: '#282c34',minHeight:'100vh',display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',fontSize: 'calc(10px + 2vmin)',color: 'white'}}>
        <SmartNFTPortal style={{width:'100vw',height:'100vh', borderWidth:'0px'}} smartImports={usmartImport} metadata={umetadata} loading={false} />
      </header>
    </div>
  );
}

export default App;
