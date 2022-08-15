const getLocalStorage = () => {
  const getJSON = localStorage.getItem('vegetables');
  const getItem = JSON.parse(getJSON);
  return getItem;
}

const addToLocalStorage = (id) => {
  const exits = getLocalStorage();
  let vegetables = {};
  if (!exits) {
    vegetables[id] = 1;
  } else {
    vegetables = exits;
    if (vegetables[id]) {
      const newVegetable = vegetables[id] + 1;
      vegetables[id] = newVegetable;
    } else {
      vegetables[id] = 1;
    }
  }


  localStorage.setItem('vegetables', JSON.stringify(vegetables));
}

export {addToLocalStorage, getLocalStorage}