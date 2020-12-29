import React from "react";
import List from "./List";
import Form from "./Form";

const App = () => {
  return (
    <div>
      <h2>Articles</h2>
      <List />
      <h>Add a new Article</h>
      <Form />
    </div>
  );
};
export default App;
