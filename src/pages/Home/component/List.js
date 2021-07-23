import Item from "./Item";

const List = ({ listData, deleteData }) => {
  //console.log('LIST:',listData)
  return (
    <div className="list">
      {/* {   //只要在JSX裡要寫JS都要加入大括號 ex:{item}
            arr.map(item => <div>{item}</div>)
        } */}
      {listData.map((item) => {
        const { note, date, time, id } = item;
        // {前面的note是Item裡的,後面的是上面那行的,date和time也一樣}
        return (
          <Item key={id} id={id} note={note} date={date} time={time} deleteData={deleteData} />
        );
      })}
    </div>
  );
};

export default List;
