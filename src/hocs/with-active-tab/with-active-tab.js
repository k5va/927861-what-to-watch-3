const DEFAULT_ACTIVE_TAB = 0;

export default (Component) => {
  return class Wrapper extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeTab: DEFAULT_ACTIVE_TAB
      };
      this._handleActiveTabChange = this._handleActiveTabChange.bind(this);
    }

    _handleActiveTabChange(activeTab) {
      this.setState({activeTab});
    }

    render() {
      return (
        <Component
          {...this.props}
          activeTab={this.state.activeTab}
          onActiveTabChange={this._handleActiveTabChange}
        />
      );
    }
  };
};
