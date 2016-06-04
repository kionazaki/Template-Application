import React from "react";
import state$ from "app/state";
import connect from "app/rx-state/connect";
import bindAction from "app/rx-state/bindAction";
import Counter2Actions from "app/actions/Counter2Actions";

export class Counter2 extends React.Component {
  static propTypes = {
    counter2: React.PropTypes.number.isRequired,
    increment: React.PropTypes.func.isRequired,
    decrement: React.PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="counter">
        <h1 className="counter__title">{ this.props.counter2 }</h1>
        <hr/>
        <button onClick={ () => this.props.increment(1) } className="counter__button counter__button--i1">+</button>
        <button onClick={ () => this.props.increment(10) } className="counter__button counter__button--i10">+10</button>
        <button onClick={ () => this.props.decrement(1) } className="counter__button counter__button--d1">-</button>
        <button onClick={ () => this.props.decrement(10) } className="counter__button counter__button--d10">-10</button>
      </div>
    );
  }
}

export default connect(state$, state => ({
  counter2: state.counter2,
  increment: bindAction(Counter2Actions.increment$),
  decrement: bindAction(Counter2Actions.decrement$)
}))(Counter2);
