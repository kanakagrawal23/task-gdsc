import React from "react";

import {
  Header,
  Part1,
  Part2,
  Part3,
  Part4,
  Part5,
  Part6,
  Footer,
} from "./components";

function App() {
  return (
    <div className="parent">
      <Header />
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
      {/* <Part6 /> */}
      <Footer />
    </div>
  );
}

export default App;
