interface Props {
  name: string;
  children: Array<React.ReactNode> | React.ReactNode;
}

const Tab: React.FunctionComponent<Props> = (props: Props) => <>{props.children}</>;

export default Tab;
