import ContactItem from 'components/ContactItem';
import Loader from 'components/Loader';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/contactsSelectors';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
// import { Item } from './ContactList.styled';

const ContactList = () => {
  const { data: contacts, error, isLoading } = useGetContactsQuery();

  const filter = useSelector(getFilter);

  const filterContacts = () => {
    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  const contactList = filterContacts();

  const renderContacts = contacts && !isLoading && contactList.length > 0;

  // const filterContact = useSelector(getFilter);

  // const visibleContacts = contacts?.filter(contact =>
  //   contact.name.toLowerCase().includes(filterContact.toLowerCase())
  // );

  // if (!visibleContacts) {
  //   return;
  // }

  return (
    <ul>
      {renderContacts &&
        contactList.map(({ id, name, phone }) => (
          <ContactItem id={id} key={id} name={name} number={phone} />
        ))}
      {isLoading && <Loader />}
    </ul>
  );
};

export default ContactList;
