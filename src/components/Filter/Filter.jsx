import './Filter.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label className="Filter">
    Filter contacts by name
    <input
      className="FilterInput"
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
