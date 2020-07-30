import { decorate, observable } from "mobx";
import { STATES, API_URL } from "../constants";
import { createContext } from "react";

let object = {
    headers: {
        'Accept': 'application/json',
    }
  };

class Statistics {
  state = STATES.IDLE;
  news = [];

  loadArticles = () => {
    this.state = STATES.LOADING;
    fetch(`${API_URL}/statistics`, object)
      .then((data) => data.json())
      .then((data) => {
        console.log("@@@@ --> " + JSON.stringify(data.data.statistics));
        let statisticsTopArray = data.data.statistics;
        this.news = statisticsTopArray;
        this.state = STATES.SUCCESS;
      })
      .catch((err) => {
        this.state = STATES.ERROR;
      });
  };
}

decorate(Statistics, {
  state: observable,
  news: observable,
});

export default createContext(new Statistics());