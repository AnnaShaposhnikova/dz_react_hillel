import React from "react";
import "./App.css";

import List from "./features/list/List";
import Header from "./features/header/Header";

class App extends React.Component {
    render() {
        return(
        <React.Fragment>
          <Header />
          <List />     

        </React.Fragment>
        );
    }
}

export default App;
