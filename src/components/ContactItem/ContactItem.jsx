import { Item, Contact, BtnDelete } from './ContactItem.style';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <Item key={id}>
      <Contact>
        {name}: {number}
      </Contact>
      <BtnDelete type="button" onClick={() => onDelete(id)}>
        Delete
      </BtnDelete>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
