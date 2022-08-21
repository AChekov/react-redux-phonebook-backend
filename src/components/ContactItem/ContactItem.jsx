import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import { Item, Contact, BtnDelete } from './ContactItem.style';
import { RotatingLines } from 'react-loader-spinner';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <Item key={id}>
      <Contact>
        {name}: {number}
      </Contact>
      <BtnDelete
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        {isDeleting && <RotatingLines width="15" />} Delete
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
