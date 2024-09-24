import setData from 'App.js';
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
 export default getData;