import redIcon from '../assets/redIcon.png';
import greenIcon from '../assets/greenIcon.png';
import Item from './Item';

function DropBox({ color, itemsB }: any) {
  return (
    <div className="box" style={{ background: color === true ? '#ED5152' : '#00887A' }}>
      <div className="iconDrop">
        {itemsB.filter((e:any) => (color === true ? 1 : 2) === e.status).length === 0 && (
          <>
            <div className="circle">
              <img src={color ? redIcon : greenIcon} alt="" />
            </div>
            <h1>DROP ZONE</h1>
          </>
        )}
      </div>
      {itemsB &&
        itemsB.map((e:any) => {
          console.log(e.val);
          if ((color === true ? 1 : 2) === e.status)
            return <Item key={e.Name} Name={e.Name} val={e.value} status={(color === true ? 1 : 2)} />;
          return null;
        })}
    </div>
  );
}

export default DropBox;
