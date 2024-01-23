import React, { useReducer, useState } from 'react';

// Define initial state
const initialState = {
  items: [],
};

// Define actions for the reducer
const actionTypes = {
  ADD_ITEM: 'ADD_ITEM',
  EDIT_ITEM: 'EDIT_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
};

// Reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case actionTypes.EDIT_ITEM:
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id ? action.payload : item
      );
      return {
        ...state,
        items: updatedItems,
      };
    case actionTypes.DELETE_ITEM:
      const filteredItems = state.items.filter(item => item.id !== action.payload);
      return {
        ...state,
        items: filteredItems,
      };
    default:
      return state;
  }
};

// Component using useReducer for state management
const StateManagementComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState('');
  const [editItemId, setEditItemId] = useState(null);

  // Action creators
  const addItem = () => {
    if (inputValue.trim() !== '') {
      const newItem = {
        id: Date.now(),
        text: inputValue,
      };
      dispatch({ type: actionTypes.ADD_ITEM, payload: newItem });
      setInputValue('');
    }
  };

  const editItem = () => {
    if (editItemId !== null && inputValue.trim() !== '') {
      const updatedItem = {
        id: editItemId,
        text: inputValue,
      };
      dispatch({ type: actionTypes.EDIT_ITEM, payload: updatedItem });
      setInputValue('');
      setEditItemId(null);
    }
  };

  const deleteItem = itemId => {
    dispatch({ type: actionTypes.DELETE_ITEM, payload: itemId });
  };

  return (
    <div>
      <ul>
        {state.items.map(item => (
          <li key={item.id}>
            {item.text}
            <div className="p-2 mb-2"><button className="btn btn-primary"  onClick={() => setEditItemId(item.id)}>Edit</button></div>
            <div className="p-2"><button className="btn btn-dark" onClick={() => deleteItem(item.id)}>Delete</button></div>
            
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        {editItemId !== null ? (
          <button onClick={editItem}>Edit Item</button>
        ) : (
          <button className="btn btn-success" onClick={addItem}>Add Item</button>
        )}
      </div>
    </div>
  );
};

export default StateManagementComponent;



