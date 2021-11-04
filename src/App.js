import "./App.css";
import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";
import data from "./assets/data.json";
import { useState } from "react";

const App = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="App">
      <Search searchText={searchText} setSearchText={setSearchText} />
      <div className="line-container">
        {data.map((item, index) => {
          let keywords = item.keywords;

          return (
            keywords.includes(searchText) && (
              <Line
                title={item.title}
                symbol={item.symbol}
                keywords={item.keywords}
                key={index}
              />
            )
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default App;
