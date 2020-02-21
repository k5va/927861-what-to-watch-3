const Tab = (props) => {
  const {children} = props;

  return children;
};

Tab.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default Tab;
