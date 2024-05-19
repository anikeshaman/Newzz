import { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <div style={{ backgroundColor: "#ffc0cb", color: "white", minHeight: "100vh" }}>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  );
};

export default App;
