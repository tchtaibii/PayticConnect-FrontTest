import Item from './Item'
import { Draggable } from 'react-beautiful-dnd';
type ItemProps = {
  Name: string;
  val: string;
  status: number;
};
type ItemStock = {
  items: ItemProps[];
};
function ItemStock(props: ItemStock) {


  return (
    <div className="itemsStock">
      {props.items.map((e: any, i:number) => {
        if (e.status === 0)
          return (
            <Draggable  key={e.Name + '-X'} draggableId={e.Name} index={i}>
              {(provided) => (
                <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.inn}>
                  <Item Name={e.Name} val={e.value} status={0} />
                </div>
              )}
            </Draggable>
          );
        return null;
      })}
    </div>
  );
}

export default ItemStock;