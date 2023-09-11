import PropTypes from 'prop-types';
import css from '../Notification/Notification.module.css';

export function Notification({ message }) {
  return <p className={css.wrap}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string,
};
