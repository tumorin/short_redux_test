import React from "react";
import { connect } from "react-redux";
import "./styles.css";

import addTextAction from "./redux/actions";

function App(props) {
  // {setText} = this.props;
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>{props.textToShow}</h2>
      <button id="btn" onClick={() => props.setText("A new text!")}>
        Set text
      </button>
      <button id="btn2" onClick={() => props.setText("A new text2!")}>
        Set text2
      </button>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setText: text => {
    dispatch(addTextAction(text));
  }
});

const mapStateToProps = state => ({
  textToShow: state.text.text
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
