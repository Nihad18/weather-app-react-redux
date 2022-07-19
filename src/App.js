import React from "react";
import SideBar from "./components/SideBar";
import SearchBar from "./components/SearchBar";
import Content from "./components/Content";

function App() {
  return (
    <div className="App h-full md:flex select-none box-border">
      <SearchBar />
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
