import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default function Button(props) {
  const { children, className, onClick } = props;
  return (
    <div className={classNames("Button", className)} onClick={onClick}>
      {children}
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  className: "",
  onClick: () => {},
};
