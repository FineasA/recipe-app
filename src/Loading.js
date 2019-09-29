import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import style from "./recipe.module.css";
import "bootstrap/dist/css/bootstrap.css";

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: undefined
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => this.setState({ done: true }));
    }, 1200);
  }

  render() {
    return (
      <div class={style.loadingState} >
        {!this.state.done ? (
          <ReactLoading type={"bars"} color={"white"} />
        ) : (
          <h1>Here are some recipes that we found!</h1>
        )}
      </div>
    );
  }
}

export default Loading;
