interface State {
  isActive: boolean;
}

export default (Component) => {
  return class Wrapper extends React.PureComponent<{}, State> {
    constructor(props) {
      super(props);

      this.state = {
        isActive: false
      };
      this._handleActiveChange = this._handleActiveChange.bind(this);
    }

    _handleActiveChange(isActive) {
      this.setState({isActive});
    }

    render() {
      return (
        <Component
          {...this.props}
          isActive={this.state.isActive}
          onActiveChange={this._handleActiveChange}
        />
      );
    }
  };
};
