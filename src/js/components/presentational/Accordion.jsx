import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.less';

import AccodionElement from './AccordionElement.jsx';

class Accordion extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
  };

  constructor(props) {
    super(props);

    const openChild = {};

    this.state = { openChild };
  }

  onClick = label => {
    const {
      state: { openChild },
    } = this;

    const isOpen = !!openChild[label];

    this.setState({
      openChild: {
        [label]: !isOpen
      }
    });
  };

  render() {
    const {
      onClick,
      props: { children },
      state: { openChild },
    } = this;

    return (
      <div className={style.childrenContainer}>
        {children.map((child, i) => (
          <AccodionElement
            key={`child-${i}`}
            isOpen={!!openChild[child.props.label]}
            label={child.props.label}
            onClick={onClick}
          >
            {child.props.children}
          </AccodionElement>
        ))}
      </div>
    );
  }
}

export default Accordion;
