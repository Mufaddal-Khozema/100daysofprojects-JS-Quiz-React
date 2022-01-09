import React, { Component } from "react";
import ReactDOM from "react-dom";
import QuizService from "./Components/quizService";

class QuizApp extends Component {
  state = {
    questionIndex: 0,
    selectedOption: null,
    score: 0,
  };

  changeQuestion = (event) => {
    this.setState({ questionIndex: this.state.questionIndex + 1 });
    if (
      this.state.selectedOption ===
      QuizService[this.state.questionIndex].correct
    ) {
      this.setState({ score: 1 + this.state.score });
    }
  };

  render() {
    return (
      <div>
        {this.state.questionIndex < QuizService.length - 1 && (
          <h3>
            Q{this.state.questionIndex + 1}{" "}
            {QuizService[this.state.questionIndex].question}
          </h3>
        )}
        {this.state.questionIndex < QuizService.length - 1 &&
          Object.values(QuizService[this.state.questionIndex].option).map(
            (keyName, i) => (
              <div>
                <input
                  type="radio"
                  name="hmm"
                  value={i}
                  key={i}
                  id={i+1}
                  onClick={() => this.setState({ selectedOption: i })}
                />
                <label for={i+1} key={i+2}>{keyName}</label>
              </div>
            )
          )}
        {this.state.questionIndex < QuizService.length - 1 && (
          <button onClick={this.changeQuestion}>Click Me</button>
        )}
        {this.state.questionIndex === QuizService.length - 1 && (
          <h1>Score: {this.state.score}</h1>
        )}
      </div>
    );
  }
}

ReactDOM.render(<QuizApp />, document.getElementById("root"));
