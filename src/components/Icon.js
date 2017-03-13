import React from 'react';

const { PropTypes } = React;

export const ICONS = {
  PLUS: 'M576 256l-128-128h-448v832h1024v-704h-448zM704 704h-128v128h-128v-128h-128v-128h128v-128h128v128h128v128z',
}

const Icon = (props) => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },

    path: {
      fill: props.color
    },
  };

  return (
    <svg
      style={styles.svg}
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox='0 0 1024 1024'
    >
      <path
        style={styles.path}
        d={props.icon}
      ></path>
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string
}

Icon.defaultProps = {
  size: 20,
}

export default Icon;
