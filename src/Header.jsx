import React from "react";

const Header = ({ form, setForm, onAdd, onUpdate }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="header">
      <h1>Olympic Medal Standings</h1>
      <div className="inputName">
        <p>Nation</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🥇</p>
        <p>&nbsp;&nbsp;🥈</p>
        <p>&nbsp;🥉</p>
      </div>
      <div className="inputInner">
        <input
          type="text"
          name="nation"
          value={form.nation}
          placeholder="국가를 입력해주세요."
          onChange={handleChange}
        />
        <input
          type="number"
          name="gold"
          value={form.gold}
          placeholder=""
          onChange={handleChange}
        />
        <input
          type="number"
          name="silver"
          value={form.silver}
          placeholder=""
          onChange={handleChange}
        />
        <input
          type="number"
          name="bronze"
          value={form.bronze}
          placeholder=""
          onChange={handleChange}
        />
        <button onClick={onAdd}>Add</button>
        <button onClick={onUpdate}>Update</button>
      </div>
    </div>
  );
};

export default Header;
