import React, { useState } from "react";
import Header from "./Header";
import List from "./List";
import "./App.css";
import "./index.css";
import olympicRings from "./assets/free-icon-olympic-rings-1885314.png";

const App = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    nation: "",
    gold: "",
    silver: "",
    bronze: "",
  });

  // Add
  const handleAdd = () => {
    if (form.nation === "") {
      alert("국가 정보를 확인해주세요.");
      return;
    }

    const exist = data.find((item) => item.nation === form.nation);
    if (exist) {
      alert("이미 존재하는 국가입니다.");
      return;
    }

    setData([...data, form]);
    setForm({ nation: "", gold: "", silver: "", bronze: "" }); // 입력 초기화
  };

  // Update
  const handleUpdate = () => {
    const updatedData = data.map((item) =>
      item.nation === form.nation
        ? { ...item, gold: form.gold, silver: form.silver, bronze: form.bronze }
        : item
    );

    setData(updatedData);
    setForm({ nation: "", gold: "", silver: "", bronze: "" }); // 입력 초기화
  };

  // Delete
  const handleDelete = (deleteNation) => {
    const filteredData = data.filter((item) => item.nation !== deleteNation);
    setData(filteredData);
  };

  return (
    <div className="app">
      <div className="logo">
        <img
          src={olympicRings}
          alt="olympicMark"
          style={{ width: "140px", height: "140px" }}
        />
      </div>
      <Header
        form={form}
        setForm={setForm}
        onAdd={handleAdd}
        onUpdate={handleUpdate}
      />
      <List data={data} onDelete={handleDelete} />
    </div>
  );
};

export default App;
