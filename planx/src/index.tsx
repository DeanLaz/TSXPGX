import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { App } from "./components/App";
import { reducers } from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

// CLASS COMPONENT =========
// interface AppProps {
//     color?: string;
//   }

// class App extends React.Component<AppProps> {
//   state = { counter: 0 };

//   onIncrement = (): void => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   onDecrement = (): void => {
//     this.setState({ counter: this.state.counter - 1 });
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.onIncrement}>+</button>
//         <button onClick={this.onDecrement}>-</button>
//         {this.state.counter}
//       </div>
//     );
//   }
// }

// FUNCTIONAL COMPONENT ==========

// interface AppProps {
//     color?: string;
//   }

// const App = (props: AppProps): JSX.Element => {
//   return <div>{props.color}</div>;
// };

// ReactDOM.render(<App color="red" />, document.querySelector("#root"));
