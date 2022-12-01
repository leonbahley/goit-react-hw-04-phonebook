import { useState } from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import ContactList from 'components/ContactList/ContactList';
import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(null);
  const [filter, setFilter] = useState('');

  const handleSubmit = (name, number, id = nanoid()) => {
    if (contacts) {
      contacts.some(item => item.name === name)
        ? alert(`${name} is already in contacts`)
        : setContacts([{ name, number, id }, ...contacts]);
    } else {
      setContacts([{ name, number, id }]);
    }
  };

  useEffect(() => {
    const LScontacts = JSON.parse(localStorage.getItem('contacts'));
    if (LScontacts) {
      setContacts(LScontacts);
    }
  }, []);

  useEffect(() => {
    if (contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const handleDelete = e => {
    setContacts(
      contacts.filter(contact => contact.id !== e.target.closest('li').id)
    );
  };

  const filteredContacts = getFilteredContacts();
  return (
    <div className={css.Phonebook}>
      <h1>Phonebook</h1>
      <Form handleSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilter} />
      <ContactList contacts={filteredContacts} onClick={handleDelete} />
    </div>
  );
};
