import React from 'react';
import Grocery from './Grocery';

const GroceryList = props => {
  let groceryList = props.groceries.map(grocery => {
    return(
      <Grocery
        key={grocery.id}
        name={grocery.name}
        click={props.handleButtonClick}
      />
    )
  })

  return(
    <div>
      <h1>Grocery List</h1>
      <ul>
        {groceryList}
      </ul>
    </div>
  )
}

export default GroceryList;
