import { decorate, observable } from "mobx";
import { STATES, API_URL } from "../constants";
import { createContext } from "react";

let object = {
    headers: {
        'Accept': 'application/json',
    }
  };

class Players {
  state = STATES.IDLE;
  news = [];

  loadArticles = () => {
    this.state = STATES.LOADING;
    fetch(`${API_URL}/players`, object)
      .then((data) => data.json())
      .then((data) => {
        let teamArray = data.data.team;
        this.news = teamArray;
        this.state = STATES.SUCCESS;
      })
      .catch((err) => {
        this.state = STATES.ERROR;
      });
  };
}

decorate(Players, {
  state: observable,
  news: observable,
});

export default createContext(new Players());