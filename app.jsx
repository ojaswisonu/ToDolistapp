import React, {useState} from 'react';
import ToDoList from "./ToDoList";

const App = () => {

  const [inputList, setInputList] = useState(" by juice ");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofItems = () =>{
    setItems((oldItems) => {
      return [...oldItems, inputList];
    })

  };

  return (<>
  <div className="main_div">
    <div className="center_div">
      <br />
      <h1>ToDo List</h1>
      <br/>
      <input type = "text" placeholder='Add a Items' onChange={itemEvent}/>
      <button onClick={listofItems}> + </button>


      <ol>
        {/*<li>{inputEvent}</li> */}

        {Items.map((itemval) =>{ <ToDoLists
        key={index}
        id={index}
        text={itemval}
        onSelect={deleteItem}/>;

        })}
      </ol>
    </div>

  </div>
  </>
  );
};
export default App;
