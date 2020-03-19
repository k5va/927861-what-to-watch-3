import * as React from "react";

interface Props {
}

interface State {
}

export default (Component) => {
  return class WithTimer extends React.PureComponent<Props, State> {

    private _timerId: number;

    constructor(props) {
      super(props);

      this._timerId = null;

      this._setTimeout = this._setTimeout.bind(this);
      this._clearTimeout = this._clearTimeout.bind(this);
    }

    componentWillUnmount() {
      this._clearTimeout();
    }

    render() {
      return (
        <Component
          {...this.props}
          setTimeout={this._setTimeout}
          clearTimeout={this._clearTimeout}
        />
      );
    }

    _setTimeout(callback, time) {
      this._timerId = window.setTimeout(callback, time);
    }

    _clearTimeout() {
      if (this._timerId) {
        clearTimeout(this._timerId);
        this._timerId = null;
      }
    }
  };
};
