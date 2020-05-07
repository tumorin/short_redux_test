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
      <button id="btn" onClick={props.setText("A new text!")}>
        Set text
      </button>
      {/* {console.log(document.getElementById('btn').click)} */}
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setText: () => {
    dispatch(addTextAction("Hi!"));
  }
});

// const mapStateToProps

export default connect(
  null,
  mapDispatchToProps
)(App);
