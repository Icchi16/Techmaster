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
  return (
    <div className="todo-list">
      <div> this : {userIdInput}</div>
      {!userIdInput
        ? todos.map((todo) => <Todo key={todo.id} {...todo} />)
        : todos
            .filter((task) => task.userId == userIdInput)
            .map((todo) => <Todo key={todo.id} {...todo} />)}
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

  const userFilter = React.useRef();

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

  const handleUserId = (e) => {
    setUserIdInput(e.target.value);
    console.log(userIdInput);
  };

  return (
    <div className="todo-app">
      <div className="filter">
        <input
          type="text"
          className="user-input"
          placeholder="Input User ID"
          defaultValue=""
          onChange={(e) => setUserIdInput(e.target.value)}
          ref={userFilter}
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
