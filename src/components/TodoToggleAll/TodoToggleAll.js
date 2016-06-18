import React from "react";
import dispatcher$ from "app/dispatcher";
import sendCommand from "app/library/sendCommand"

export class TodoToggleAll extends React.Component {

    static propTypes = {
        toggleAll: React.PropTypes.bool.isRequired
    };

    render() {
        var name = 'TodoToggleAll';
        return (
            <input
                className="toggle-all"
                type="checkbox"
                checked={this.props.toggleAll}
                onChange = {(e) => sendCommand(name, 'toggleAll',{})} />
        );
    }
}

export default TodoToggleAll;