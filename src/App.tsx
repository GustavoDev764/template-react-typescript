import React from "react";
import MyComponent from "Components/MyComponent";
import "./App.css";

const App: React.FC = () => (
  <div className="App">
    <MyComponent />
    <h1>Template de React com TypeScript</h1>
    <h2>Eslint + Prettier</h2>
    <ul>
      <li>
        <h3>Eslint Rules Airbnb</h3>
      </li>
      <li>
        <h3>Criando por Gustavo José</h3>
      </li>
    </ul>
  </div>
);

export default App;
