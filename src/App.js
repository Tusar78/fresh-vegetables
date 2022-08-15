import { useEffect, useState } from "react";
import "./Global.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { addToLocalStorage, getLocalStorage } from "./Components/Utils/Utils";

function App() {
  const [toggle, setToggle] = useState(false);
  const [loadVegetables, setLoadVegetables] = useState([]);
  const [vegetables, setVegetables] = useState([]);
  const [choose, setChoose] = useState([]);

  useEffect(() => {
    fetch('vegetables.json')
      .then(res => res.json())
      .then(data => setLoadVegetables(data))
  }, [loadVegetables])
  
  const toggleCartFunc = (toggleCartState) => {
    setToggle(toggleCartState);
  };

  const addToCart = (selectedVegetable) => {
    const exits = vegetables.find(
      (vegetable) => vegetable.id === selectedVegetable.id
    );

    if (!exits) {
      const newVegetable = [...vegetables, selectedVegetable];
      if (newVegetable.length <= 4) {
        setVegetables(newVegetable);        
      } else {
        alert(`You can't buy over 4 items!`);
      }
    } else {
      alert(`You can't buy the same item!`);
    }

    addToLocalStorage(selectedVegetable.id)
  };
  
  useEffect(() => {
    const storedVegetablesIds = getLocalStorage();
    for (const id in storedVegetablesIds) {
      console.log(id);
      const storedVegetables= vegetables.find(vegetable => vegetable.id == id);
      console.log(storedVegetables);
    }
  }, [vegetables])

  const chooseOne = () => {
    const selectedItem = vegetables.length;
    const generateRandomNumber = Math.floor(Math.random() * selectedItem);
    const randomProduct = vegetables[generateRandomNumber];
    setChoose(randomProduct);
  };  

  const chooseAgain = () => {
    setVegetables([])
    setChoose([])
  }

  const deleteProduct = (deletedVegetable) => {
    const deleted = vegetables.filter(vegetable => vegetable.id !== deletedVegetable.id)  
    setVegetables(deleted)
  }

  const randomDeleteProduct = (deletedChoose) => {
    const randomDeleted = choose.id === deletedChoose.id;
    if (randomDeleted) {
      setChoose([])
    }
  }

  return (
    <>
      <Header toggleCartFunc={toggleCartFunc} vegetables={vegetables} />
      <Main toggle={toggle} addToCart={addToCart} vegetables={vegetables} chooseAgain={chooseAgain} choose={choose} chooseOne={chooseOne} deleteProduct={deleteProduct} randomDeleteProduct={randomDeleteProduct} loadVegetables={loadVegetables} />
      <Footer />
    </>
  );
}

export default App;