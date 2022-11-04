const User = ({ user }) => {
  return (
    <div>
      {user ? (
        <div>
          {user.name} {user.isAdmin && <button>Admin page</button>}{" "}
        </div>
      ) : (
        <div>
          <button>Log In</button>
          <button>Register</button>
        </div>
      )}
    </div>
  );
};

User.propTypes = {
  user: PropTypes.exact({
    name: PropTypes.string,
    isAdmin: PropTypes.boolean,
  }),
};
