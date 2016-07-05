import React from "react";
import ReactDOM from "react-dom";
import App from "app/components/App/App";



require("./css/index.css");
ReactDOM.render(<App />, document.getElementById("root"));


import testFunc from "app/tests/testFunc";
testFunc();