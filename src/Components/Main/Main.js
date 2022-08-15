import React from 'react';
import Cart from '../Cart/Cart';
import Vegetables from '../Vegetables/Vegetables';
import './Main.css';

const Main = ({ toggle, addToCart, vegetables, chooseAgain, choose, chooseOne, deleteProduct, randomDeleteProduct, loadVegetables}) => {
  return (
    <main className='main'>
      <Vegetables addToCart={addToCart} loadVegetables={loadVegetables}/>
      <Cart toggle={toggle} vegetables={vegetables} chooseAgain={chooseAgain} choose={choose} chooseOne={chooseOne} deleteProduct={deleteProduct} randomDeleteProduct={randomDeleteProduct} />
    </main>
  );
};

export default Main;