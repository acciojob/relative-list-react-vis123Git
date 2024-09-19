import React from "react";

const data = ["relativeListItem1", "relativeListItem2", "relativeListItem3", "relativeListItem4", "relativeListItem5"];
const App = () => {
  return (
    <div id="main">
      <ol id="list">
        {data.map((item, index) => (
          <li key={item} id={item}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
