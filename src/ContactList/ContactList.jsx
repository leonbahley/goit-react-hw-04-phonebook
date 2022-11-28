import './ContactList.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onClick }) => (
  <>
    <ul className="List">
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <li className="ListItem" id={id} key={id}>
            {name}: {number}
            <button className="DeleteBtn" type="button" onClick={onClick}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  </>
);

ContactList.propTypes = {
  contacts: PropTypes.array,
  onClick: PropTypes.func.isRequired,
};

export default ContactList;
