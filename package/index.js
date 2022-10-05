import React from "react";

const Header = (props) => {
  const { title, textColor, fontSize, fontWeight } = props;
  return <div style={{ color: textColor, fontSize, fontWeight }}>{title}</div>;
};

export default Header;
