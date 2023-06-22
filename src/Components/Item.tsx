import dir from '../assets/dir.svg'

type ItemProps = {
  Name: string;
  val: string;
  status: number;
};

function Item(props: ItemProps) {
  
  return (
    <div className="item">
      <img className="dir" src={dir} alt="" />
      <h1 className="inputItem">{props.val}</h1>
    </div>
  );
}

export default Item;