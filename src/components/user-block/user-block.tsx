interface Props {
  isAuthenticated: boolean;
  avatar?: string;
  onSignInClick?: () => void;
  onAvatarClick?: () => void;
}

const UserBlock: React.FC<Props> = (props: Props) => {
  const {isAuthenticated, avatar, onSignInClick, onAvatarClick} = props;

  return (
    <div className="user-block">
      {
        isAuthenticated &&
        <div className="user-block__avatar" onClick={onAvatarClick}>
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

export default UserBlock;
