import { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import './App.css';

function App() {
  //Show Div with buttons
  const [isVisible, setIsVisible] = useState(true);
  const [data,setData]=useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
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
    const toggleVisibility = (category) => {
      setIsVisible(isVisible);
      setSelectedCategory(category);
    };
    const [imageUrls, setImageUrls] = useState({
      backgrounds: 'https://res.cloudinary.com/dijtpwbyc/image/upload/v1727023126/yellow70_us2bkc.png',
      neck: 'https://res.cloudinary.com/dijtpwbyc/image/upload/v1727023113/default_vl7wow.png',
      leg: "https://res.cloudinary.com/dijtpwbyc/image/upload/v1727023107/default_vidpk3.png",
      mouth: "https://res.cloudinary.com/dijtpwbyc/image/upload/v1727023110/default_skjval.png",
      nose: 'https://res.cloudinary.com/dijtpwbyc/image/upload/v1727023115/nose_ils0np.png',
      ears: "https://res.cloudinary.com/dijtpwbyc/image/upload/v1727023127/default_hxsdp7.png",
      accessories: "https://res.cloudinary.com/dijtpwbyc/image/upload/v1727023060/headphone_hhcuwh.png",
      hair: "https://res.cloudinary.com/dijtpwbyc/image/upload/v1727023103/default_z6mxwh.png",
      eyes: "https://res.cloudinary.com/dijtpwbyc/image/upload/v1727023098/default_j4kidi.png",
    }); 
    const handleButtonClick = (category,item) => {
      setImageUrls(
        (prevUrls)=>({
          ...prevUrls,
          [category]: data[category][item],
        })
      )
    }
    //randomize button
    const getRandomUrl = (category) => {
      const items = Object.values(data[category]);
      console.log(items[Math.floor(Math.random() * items.length)])
      return items[Math.floor(Math.random() * items.length)];
    };
    const randomizeImages = () => {
      setImageUrls({
        backgrounds: getRandomUrl('backgrounds'),
        neck: getRandomUrl('neck'),
        leg: getRandomUrl('leg'),
        mouth: getRandomUrl('mouth'),
        nose: 'https://res.cloudinary.com/dijtpwbyc/image/upload/v1727023115/nose_ils0np.png',
        ears: getRandomUrl('ears'),
        accessories: getRandomUrl('accessories'),
        hair: getRandomUrl('hair'),
        eyes: getRandomUrl('eyes'),
      });
    };
    //Download button
    const downloadImage = () => {
      const editor = document.querySelector('.editor');
      html2canvas(editor, {
        useCORS: true,
        backgroundColor: null,
      }).then(canvas => {
        canvas.toBlob(blob => {
          saveAs(blob, 'generated-image.png');
        });
      });
    };
    useEffect(() => {
      console.log('Initial image URLs:', imageUrls);
    }, [imageUrls]);
  return (
    <div className="App">
      <div className="content">
        <div className="title">ALPACA IMAGE GENERATOR</div>
        <div className="editorplus">
          <div className="editor">
              <img src={imageUrls.backgrounds} className="layer" alt="background" ></img>
              <img src={imageUrls.neck} className="layer" alt="neck" ></img>
              <img src={imageUrls.leg} className="layer" alt="leg" ></img>
              <img src={imageUrls.mouth} className="layer" alt="mouth" ></img>
              <img src={imageUrls.nose} className="layer" alt="nose" ></img>
              <img src={imageUrls.ears} className="layer" alt="ears" ></img>
              <img src={imageUrls.accessories} className="layer" alt="accessories" ></img>
              <img src={imageUrls.hair} className="layer" alt="hair" ></img>
              <img src={imageUrls.eyes} className="layer" alt="eyes" ></img>
          </div>
          <div className="optional">
          <button className="buttons-21" onClick={randomizeImages}><p>Randomize</p></button>
          <button className="buttons-2" onClick={downloadImage}><p>Download</p></button>
          </div>
        </div>
        <div className="items">
          <div className='text-header'><p>ACCESSORIZE THE ALPACA</p></div>
          <div className='buttons'>
          {Object.keys(data).map((category) => (
        <button key={category} onClick={() => toggleVisibility(category)}>
          
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
          </div>
          </div>
          {isVisible && selectedCategory && (
        <div className="options">
          <div className='text-header'><p>STYLE</p></div>
          <div className='buttons'>
          {Object.keys(data[selectedCategory]).map((item, index) => (
              <button key={index} onClick={() => handleButtonClick(selectedCategory, item)}>{item}</button>
            ))}
          </div>
        </div>)}
    </div>
    </div>
    
  );
}
export default App ;
