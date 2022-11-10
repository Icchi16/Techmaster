const Todo = ({ userId, id, title, completed }) => {
  const [checkComplete, setCheckComplete] = React.useState();

  const handleCompleteChange = (e) => {
    e.target.checked = !e.target.checked;
  };

  return (
    <div className="task">
      <div className="title">{title}</div>
      <input
        type="checkbox"
        value={completed}
        checked={completed}
        onChange={handleCompleteChange}
      />
    </div>
  );
};

const TodoList = ({ todos, userIdInput, setUserIdInput }) => {
  const [filterTodos, setFilterTodos] = React.useState(todos);
  React.useEffect(() => {
    !userIdInput
      ? setFilterTodos(todos)
      : setFilterTodos(todos.filter((e) => e.userId == userIdInput));
  }, [todos, userIdInput]);

  return (
    <div className="todo-list">
      <div> this : {userIdInput}</div>
      {filterTodos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
};

const TodoType = PropTypes.exact({
  userId: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  completed: PropTypes.boolean,
});

Todo.propTypes = TodoType;
TodoList.propTypes = PropTypes.arrayOf(TodoType);

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [userIdInput, setUserIdInput] = React.useState([]);

  const controller = new AbortController();

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="todo-app">
      <div className="filter">
        <input
          type="text"
          className="user-input"
          placeholder="Input User ID"
          defaultValue=""
          onChange={(e) => setUserIdInput(e.target.value)}
        />
      </div>
      <TodoList
        todos={todos}
        userIdInput={userIdInput}
        setUserIdInput={setUserIdInput}
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);
