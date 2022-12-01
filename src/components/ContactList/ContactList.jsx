import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onClick }) => (
  <>
    <ul className={css.List}>
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <li className={css.ListItem} id={id} key={id}>
            {name}: {number}
            <button className={css.DeleteBtn} type="button" onClick={onClick}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  </>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};

export default ContactList;
