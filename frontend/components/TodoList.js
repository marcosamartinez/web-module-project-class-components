import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  state = {
    showAll: true,
  };

  toggleShowAll = () => {
    this.setState({
      ...this.state,
      showAll: !this.state.showAll,
    });
  };

  render() {
    const { todos, toggleCompletion } = this.props;
    const filterd = todos.filter((td) => !td.completed || this.state.showAll);
    return (
      <div>
        {filterd.map((todo) => (
          <Todo key={todo.id} todo={todo} toggleCompletion={toggleCompletion} />
        ))}
        <button onClick={this.toggleShowAll}>
          {this.state.showAll ? "Hide completed Todos" : "Show All"}{" "}
        </button>
      </div>
    );
  }
}
