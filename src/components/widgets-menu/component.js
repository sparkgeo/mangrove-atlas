import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from 'components/icon';
import Modal from 'components/modal';

import styles from './style.module.scss';

const WidgetsMenu = ({ currentDashboard, dashboards, setCurrent, mobile }) => {
  const [isOpen, toggleModal] = useState(false);
  const [position, setPosition] = useState({
    top: null,
    left: null,
    x: null
  });
  const menuRef = useRef();

  useEffect(() => {
    if (menuRef.current) {
      const { top, left, x } = menuRef.current.getBoundingClientRect();
      setPosition({ top, left, x });
    }
  }, [menuRef]);

  const handleModal = (slug) => {
    toggleModal(!isOpen);
    setCurrent(slug)
  };

  return (
    <div className={cx(styles.widgets_menu, { [styles.mobile]: mobile })} ref={menuRef}>
      {mobile
        ? <button className={styles.btn} onClick={() => toggleModal(!isOpen)}>
          <Icon name="ecosystem_services" className={cx([styles.icon])} />
          <span className={styles.menuItemTitle}>Categories</span>
        </button>
        : (
          <button className={styles.categoriesMenuBtn}>
            <span className={styles.menuItemTitle}>Categories</span>
            <ul>
              {dashboards?.map(({ slug, name }) => (
                <li key={slug} onClick={() => handleModal(slug)} className={cx({ [styles._active]: currentDashboard === slug })}>
                  <Icon name={slug} className={cx([styles.icon])} alt={name} />
                </li>))}
            </ul>
          </button>
        )}
      <Modal
        isOpen={isOpen}
        onRequestClose={handleModal}
        widgetsMenu
        closeButton={false}
      >
        <div
          className={cx(styles.modalContent, { [styles.mobile]: mobile })}
          style={{
            top: mobile ? '50%' : position.top,
            left: mobile ? '50%' : position.left  - position.x / 2
          }}
        >
          <span className={styles.menuItemTitle}>Categories</span>
          <ul>
            {dashboards?.map(({ slug, name }) => (
              <li key={slug} onClick={() => handleModal(slug)} className={cx({ [styles._active]: currentDashboard === slug })}>
                <Icon name={slug} className={cx([styles.icon])} alt={name} />
                <span>{name}</span>
              </li>))}
          </ul>
        </div>
      </Modal>
    </div>
  );
};

WidgetsMenu.propTypes = {
  currentDashboard: PropTypes.string.isRequired,
  dashboards: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      name: PropTypes.string
    })
  ),
  setDashboard: PropTypes.func.isRequired
};

export default WidgetsMenu;
