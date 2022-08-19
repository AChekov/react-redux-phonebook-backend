import ContactItem from 'components/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { getFilter, getItems } from 'redux/selectors';
import { useGetContactQuery } from 'redux/contacts/contactsSlice';
// import { Item } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getItems);
  const filterContact = useSelector(getFilter);

  const { id, name, phone } = useGetContactQuery();

  const handleDelete = id => dispatch(deleteContact(id));

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContact.toLowerCase())
  );

  // console.log(visibleContacts);

  return (
    <ul>
      {visibleContacts.map(({ id, name, phone }) => (
        <ContactItem
          id={id}
          key={id}
          name={name}
          number={phone}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
