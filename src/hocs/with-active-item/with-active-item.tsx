const DEFAULT_ACTIVE_ITEM = 0;

interface State {
  activeItem: number;
}

export default (Component) => {
  return class Wrapper extends React.PureComponent<{}, State> {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: DEFAULT_ACTIVE_ITEM
      };
      this._handleActiveItemChange = this._handleActiveItemChange.bind(this);
    }

    _handleActiveItemChange(activeItem) {
      this.setState({activeItem});
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItem={this.state.activeItem}
          onActiveItemChange={this._handleActiveItemChange}
        />
      );
    }
  };
};
