import React from "react";
import TodoItem from "./TodoItem";

const TodosList = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
        />
      ))}
    </div>
  )
};

export default TodosList;

// import React from "react";
// import TodoItem from "./TodoItem";

// class TodosList extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.props.todos.map(todo => (
//           <TodoItem key={todo.id} todo={todo} handleChangeProps={this.props.handleChangeProps} deleteTodoProps={this.props.deleteTodoProps} />
//         ))}
//       </div>
//     );
//   };
// };

// export default TodosList;
