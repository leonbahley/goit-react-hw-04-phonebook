import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label className={css.Filter}>
    Filter contacts by name
    <input
      className={css.FilterInput}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);
export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
