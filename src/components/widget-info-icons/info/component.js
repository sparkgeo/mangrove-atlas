import React, { useState } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

// components
import Modal from 'components/modal';
import Icon from 'components/icon';

import styles from './style.module.scss';


const Info = () => {
  const [isOpen, toggleModal] = useState(false);

  const handleModal = () => {
    toggleModal(!isOpen);
  };

  return (
    <button
      onClick={handleModal}
      className={cx(styles.modalBtn)}
    >
      <Icon name="menu" alt="info" className={styles.modalIcon} />
      <Modal
        isOpen={isOpen}
        onRequestClose={handleModal}
      >
        <div className={styles.modalContent}>

          <h2>Widget name</h2>
          <p></p>

        </div>
      </Modal>
    </button>
  );
};

Info.propTypes = {
  isOpened: PropTypes.bool,
  closeSearchPanel: PropTypes.func
};

Info.defaultProps = {
  isOpened: false,
  closeSearchPanel: () => null
};

export default Info;


