import { Item, Contact, BtnDelete } from './ContactItem.style';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <Item key={id}>
      <Contact>
        {name}: {number}
      </Contact>
      <BtnDelete type="button" onClick={() => deleteContact(id)}>
        Delete
      </BtnDelete>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
