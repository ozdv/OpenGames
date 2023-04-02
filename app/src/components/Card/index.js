import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default function Card(props) {
  const { children, className, onClick } = props;
  return (
    <div className={classNames("Card", className)} onClick={onClick}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
Card.defaultProps = {
  className: "",
  onClick: () => {},
};
