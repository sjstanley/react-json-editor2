import React from 'react';
import './style.css';
//import LevelList from './LevelList';
import ObjectAttribute from './ObjectAttribute';


  

const App = () => {
  const json = { nameList: ['Jim', 'Sally', 'Bender'],
  				 nameObject: {'First': 'Annie', 
  				 			  'Second': 'Banana', 
  				 			  'Third': {'A': 'Tim', 'B': 'Mckenzie'}}}
//<LevelList listObject={json.nameList}/>
  return (
    <div className="app">
      <pre>{JSON.stringify(json, null, '  ')}</pre>
      <ObjectAttribute value={json}/>
      

    </div>
  );
};

export default App;
