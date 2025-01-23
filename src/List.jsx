import React from "react";

const List = ({ data, onDelete }) => {
  return (
    <div className="list">
      <div className="listWrap">
        <h1>Medal List</h1>
        <div className="listName">
          <p>Nation</p>
          <p>🥇</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🥈</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🥉</p>
        </div>
      </div>
      <hr />
      <ul>
        {data.map((item) => (
          <li key={item.nation} className="listItem">
            <span> {item.nation}</span>
            <span> {item.gold}</span>
            <span> {item.silver}</span>
            <span> {item.bronze}</span>
            <button onClick={() => onDelete(item.nation)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
