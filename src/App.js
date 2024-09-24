import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data,setData]=useState([]);
  //Get that sweet data.
  const getData = () =>{
      fetch(
        'data.json', {
          headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        return setData(myJson);
      })
    }
    useEffect(()=>{
      getData()
    },[]);
  return (
    <div className="App">
      <div className="content">
        <div className="title">Alpaca Image Generator</div>
        <div className="editor">
        <img src={data.backgrounds?.yellow70} className="layer"></img>
        <img src={data.neck?.default} className="layer"></img>
        <img src={data.leg?.default} className="layer"></img>
        <img src={data.mouth?.default} className="layer"></img>
        <img src={data.nose?.nose} className="layer"></img>
        <img src={data.ears?.default} className="layer"></img>
        <img src={data.accessories?.headphone} className="layer"></img>
        <img src={data.hair?.default} className="layer"></img>
        <img src={data.eyes?.default} className="layer"></img>
        </div>
        <div className="items">
          <div><p>buttons here</p></div>
          <div className='buttons'>
          {Object.keys(data).map((category) => (
        <button key={category}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
          </div>
          </div>
        <div className="options">
          <div><p>buttons here</p></div>
          <div className='buttons'>
            <button>hello</button>
            <button>hello</button>
            <button>hello</button>
            <button>hello</button>
            <button>hello</button>
          </div>
        </div>
        <div className="optional">not Again</div>
    </div>
    </div>
    
  );
}
export default App ;
