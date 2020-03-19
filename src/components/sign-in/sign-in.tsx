import * as React from "react";
import {AppLogo} from "@components";
import {AuthData} from "@types";

interface Props {
  onSubmit: (authData: AuthData) => void
};

const SignIn: React.FunctionComponent<Props> = (props: Props) => {
  const {onSubmit} = props;

  const loginRef: React.RefObject<HTMLInputElement> = React.createRef();
  const passwordRef: React.RefObject<HTMLInputElement> = React.createRef();

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <AppLogo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form"
          onSubmit={(evt) => {
            evt.preventDefault();
            onSubmit({login: loginRef.current.value, password: passwordRef.current.value});
          }}
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address"
                name="user-email" id="user-email" ref={loginRef} />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password"
                name="user-password" id="user-password" ref={passwordRef} />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <AppLogo isLight={true} />
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export default SignIn;
