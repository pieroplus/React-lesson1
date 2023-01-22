import React from "react";

export const ColorfulMessage = (props) => {
  const { color, message, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return (
    <>
      <p style={contentStyle}>{message}</p>
      <p style={contentStyle}>{children}</p>
    </>
  );
};

// export default ColorfulMessage;
