import { useEffect, useState } from 'react';
import './App.css';
import HowTo from './HowTo';
import Main from './main/Main';


function App() {

  const [ page , setPage ] = useState(true);

  useEffect(() => {
    document.title = "RedDog";
  },[])

  return (
    <>
      { page ? 
        <Main setPage={setPage} /> 
        :
        <HowTo setPage={setPage}/>
      }
    </>
  );
}

export default App;
