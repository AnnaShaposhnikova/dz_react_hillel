import React from "react";
import "./App.css";

import List from "./features/list/List";
import Header from "./features/header/Header";

class App extends React.Component {
  
    render() {
      const name = "Bob"
        return(
        <React.Fragment>
          <Header />
          <List  data = {name} age = {56}/>     

        </React.Fragment>
        );
    }
}

export default App;
