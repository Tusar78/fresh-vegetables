import React, { useEffect, useState } from 'react';
import Vegetable from '../Vegetable/Vegetable';
import './Vegetables.css';

const Vegetables = ({ addToCart }) => {
  const [vegetables, setVegetables] = useState([]);
  useEffect(() => {
    fetch('vegetables.json')
      .then(res => res.json())
      .then(data => setVegetables(data))
  }, [vegetables])
  return (
    <section className='vegetables bd-grid'>
      <h2 className="section__title">Adulterated Free Vegetables</h2>
      <span className='section__subtitle'>Foods</span>
      
      <div className="vegetables__container bd-grid">
        {
          vegetables.map(vegetable => <Vegetable key={vegetable.id} vegetable={vegetable} addToCart={addToCart} />)
        }
      </div>
    </section>
  );
};

export default Vegetables;