import { decorate, observable } from "mobx";
import { STATES, API_URL } from "../constants";
import { createContext } from "react";

let object = {
    headers: {
        'Accept': 'application/json',
    }
  };

class Games {
  state = STATES.IDLE;
  news = [];

  loadArticles = () => {
    this.state = STATES.LOADING;
    fetch(`${API_URL}/games`, object)
      .then((data) => data.json())
      .then((data) => {
        // console.log("@@@@ --> " + JSON.stringify(data.data.games));
        let gamesTopArray = data.data.games;
        this.news = gamesTopArray;
        this.state = STATES.SUCCESS;
      })
      .catch((err) => {
        this.state = STATES.ERROR;
      });
  };
}

decorate(Games, {
  state: observable,
  news: observable,
});

export default createContext(new Games());