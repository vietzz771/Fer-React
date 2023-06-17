import "./App.css";
import { Component } from "react";
import { DISHES } from "./shared/dishes";
import { COMMENTS } from "./shared/comments";
import { LEADERS } from "./shared/leaders";
import { PROMOTIONS } from "./shared/promotions";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
