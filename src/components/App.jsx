import React from "react";
import Dictionary from "./Dictionary";
import emojipedia from "../emojipedia";

function CreateCard(emoji) {
  return (
    <Dictionary
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      details={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(CreateCard)}
    </div>
  );
}

export default App;
