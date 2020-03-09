const UserBlock = (props) => {
  const {isAuthenticated, avatar, onSignInClick} = props;

  return (
    <div className="user-block">
      {
        isAuthenticated &&
        <div className="user-block__avatar">
          <img src={avatar} alt="User avatar" width="63" height="63" />
        </div>
      }
      {isAuthenticated ||
        <a href="#" className="user-block__link"
          onClick={(evt) => {
            evt.preventDefault();
            onSignInClick();
          }}
        >Sign in</a>
      }
    </div>
  );
};

UserBlock.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  onSignInClick: PropTypes.func
};

export default UserBlock;
