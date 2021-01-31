import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;


    return (
      <div
        className="childContainer"
      >
        <div className="childTitle" onClick={onClick}>
          {label}
          <div className="childTitleIcon">
            {!isOpen && <FontAwesomeIcon icon={faPlusSquare} />}
            {isOpen && <FontAwesomeIcon icon={faMinusSquare} />}
          </div>
        </div>
        {isOpen && (
          <div
            className="childBody"
          >
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;
