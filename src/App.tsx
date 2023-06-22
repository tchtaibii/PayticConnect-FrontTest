import React, { useState } from 'react';
import Item from './Components/Item'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.scss';
import add from './assets/add.svg';
import exit from './assets/exit.svg';
import DropBox from './Components/DropBox';
import TableColumn from './Components/TableColumn';

function App() {
  const [addItems, setAddItems] = useState(false);
  const [counter, setCounter] = useState(0);
  type StockArrType = {
    Name: string;
    value: string;
    status: number;
  }[];
  const [itemsStock, setItemsStock] = useState<any[]>([]);
  function AddItems() {
    
    const [itemValue, setItemValue] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setItemValue(e.target.value);
    };

    const handleSubmit = () => {
      if (itemValue.length > 0) {
        setItemsStock((prevItems: StockArrType[]) => [
          ...prevItems,
          { Name: 'item' + counter, value: itemValue, status: 0 }
        ]);
        setCounter((prevCounter) => prevCounter + 1);
        setAddItems(false);
      }
    };

    return (
      <div className="popItems">
        <button onClick={() => setAddItems(false)} className="btn-exit">
          <img className="exit" src={exit} alt="" />
        </button>
        <div className="itemsAddC">
          <div className="itemsPop">
            <h1>{'Items ' + counter}</h1>
            <input onChange={handleChange} placeholder="Name of The Item...." type="text" />
            <button disabled={itemValue.length === 0} onClick={handleSubmit} className="BTN">
              <div className="insideBtn">SUBMIT</div>
            </button>
          </div>
        </div>
      </div>
    );
  }
  const [showTable, setShow] = useState(false)
  
  return (
    <div className="App">
      {addItems && <AddItems />}
      <DragDropContext onDragEnd={(e) => {
        const update = itemsStock.map((it) => {
          if (it.Name == e.draggableId)
            return {...it, status: (e.destination && e.destination.droppableId === 'redBox' ? 1 : e.destination && e.destination.droppableId === 'greenBox' ? 2 : 'stockBox')}
          return it;
        });
        setItemsStock(update);
        
      }}>
        <div className="dropBoxes">
          <Droppable droppableId="redBox">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <DropBox itemsB={itemsStock}  color={true} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="greenBox">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <DropBox itemsB={itemsStock} color={false} />
              </div>
            )}
          </Droppable>
        </div>
        <div className="creationItems">
        <Droppable droppableId="stockBox">
          {(provided) =>(
            <div className="itemsStock" {...provided.droppableProps} ref={provided.innerRef}>
            {itemsStock.map((e: any, i: number) => {
              console.log(e.value);
              if (e.status === 0)
                return (
                  <Draggable key={e.Name + '-X'} draggableId={e.Name} index={i}>
                    {(provided) => (
                      <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                        <Item Name={e.Name} val={e.value} status={0} />
                      </div>
                    )}
                  </Draggable>
                );
              return null;
            })}
          </div>
          )}
          </Droppable>
          <button onClick={() => setAddItems(true)} className="addItem">
            <img src={add} alt="" />
          </button>
        </div>
      </DragDropContext>
      <div className="submit">
        <button onClick={() =>{

          setShow(true);
        }} className="BTN">
          <div className="insideBtn">SUBMIT</div>
        </button>
      </div>
      <div className="table-container">
        <div className="table">
          <TableColumn data={itemsStock} isShow={showTable} isRed={true} />
          <TableColumn data={itemsStock} isShow={showTable} isRed={false} />
        </div>
      </div>
    </div>
  );
}
export default App
