import React    from "react";
import ReactDOM from "react-dom";
import App      from "app/components/App/App";

import state$ from "app/state";

require("./css/index.css");

//ReactDOM.render(<App />, document.getElementById("root"));

state$.subscribe( r => ReactDOM.render(<App {...r} />, document.getElementById("root")) );

