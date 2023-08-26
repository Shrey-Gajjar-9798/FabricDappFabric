import './App.css';
import {useState} from "react";

function App() {

  const [datakey, setdatakey] = useState("")
  const [datavalue, setdatavalue] = useState("")


  function handleKey(e){
    setdatakey(e.target.value);
  }
  function handleValue(e){
    setdatavalue(e.target.value);
  }

  function storeData(e){
    e.preventDefault();
    console.log({datakey,datavalue});
    let data = {datakey,datavalue};
    fetch('http://localhost:9798/invoke', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ 'key': datakey, 'value': datavalue})
     });
    // fetch("http://localhost:9798/invoke",{
    //   //mode: 'no-cors',
    //   method:'POST',
    //   headers: {
    //     'Content-Type': 'application/json;'
    //   },
    //   body: JSON.stringify({ 'key': "dert", 'value': "sdfs"})
    // }).then((result)=>{
    //   console.log(data.datakey,"",data.datavalue);
    // })   
  }

  return (
    <div className="App">
      <div className='bimg'>
        <img src='https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'></img>
      </div>
      <div className='header'>
        <h1 className='dlt'>Distributed Ledger Technology</h1>
        <h1 className='hf'>using Hyperledger Fabric</h1>
      </div>
      <div className='formcontainer'>
        <form onSubmit={storeData}>
          <h2 className='formtxt'>Store Data</h2><br></br>
          <input type='text' className='inputsty' value={datakey} onChange={handleKey} placeholder='key'></input>
          <input type='text' className='inputsty' value={datavalue} onChange={handleValue} placeholder='value'></input>
          <button onClick={storeData}>Store Data</button>
        </form>
      </div>
    </div>
  );
}

export default App;
