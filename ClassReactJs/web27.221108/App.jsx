const Todo = ({ userId, id, title, completed }) => {
  const [checkComplete, setCheckComplete] = React.useState(completed);

  const handleCompleteChange = (e) => {
    completed = !e.target.completed;
    console.log(!completed);
    setCheckComplete(!completed);
  };

  return (
    <div className="task">
      <div className="title">{title}</div>
      <input
        type="checkbox"
        id={id}
        value={completed}
        checked={completed}
        onChange={handleCompleteChange}
      />
    </div>
  );
};

<<<<<<< HEAD
const TodoList = ({ todos, userIdInput, setUserIdInput }) => {
  const [filterTodos, setFilterTodos] = React.useState(todos);
  React.useEffect(() => {
    !userIdInput
      ? setFilterTodos(todos)
      : setFilterTodos(todos.filter((e) => e.userId == userIdInput));
  }, [todos, userIdInput]);
=======
const TodoList = ({ todos, userIdInput }) => {
  const [filteredTodos, setFilteredTodos] = React.useState(todos);

  React.useEffect(() => {
    setFilteredTodos(
      !userIdInput ? todos : todos.filter((e) => e.userId == userIdInput)
    );
  }, [userIdInput, todos]);
>>>>>>> 492829aca35d81f47caeb888dbfe07633896032b

  return (
    <div className="todo-list">
      <div> this : {userIdInput}</div>
<<<<<<< HEAD
      {filterTodos.map((todo) => (
=======
      {filteredTodos.map((todo) => (
>>>>>>> 492829aca35d81f47caeb888dbfe07633896032b
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
  const [userIdInput, setUserIdInput] = React.useState();

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
