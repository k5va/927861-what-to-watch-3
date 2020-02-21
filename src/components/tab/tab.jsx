const Tab = (props) => {
  const {children} = props;

  return children;
};

Tab.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node.isRequired
  ]).isRequired
};

export default Tab;
