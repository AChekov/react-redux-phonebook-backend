import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { getItems } from 'redux/contacts/contactsSelectors';
// import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './ContactForm.styled';
// import { addContact } from 'redux/contactSlice';
import {
  useGetContactsQuery,
  useCreateContactMutation,
} from 'redux/contacts/contactsSlice';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const { data: contacts } = useGetContactsQuery();
  const [createContact] = useCreateContactMutation();

  // const contacts = useSelector(getItems);

  const handleInputChange = evt => {
    const { value } = evt.currentTarget;

    evt.currentTarget.name === 'name' ? setName(value) : setPhone(value);
  };

  const addContact = data => {
    const contactName = contacts.map(contact => contact.name.toLowerCase());
    const isAdding = contactName.includes(data.name.toLowerCase());

    if (!isAdding) {
      createContact(data);
      reset();
      toast.success(`Contact, ${name} successfully added`);
    } else {
      toast.error(`${data.name} is already in contacts.`);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const contact = {
      // id: nanoid(),
      name,
      phone,
    };

    // const findName = contacts.find(
    //   contact => contact.name.toLowerCase() === name.toLowerCase()
    // );

    // if (findName) {
    //   return alert(`${name} is already in contacts.`);
    // }
    // const findPhone = contacts.find(contact => contact.phone === phone);
    // if (findPhone) {
    //   return alert(`This phone number is already in contacts.`);
    // }

    // dispatch(addContact(contact));
    addContact(contact);
  };

  // очистка инпутов
  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Input
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleInputChange}
          required
        />
      </Label>
      <Label>
        <Input
          type="tel"
          name="phone"
          placeholder="Phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={phone}
          onChange={handleInputChange}
          required
        />
      </Label>
      <Button type="submit">Save contact</Button>
    </Form>
  );
};

export default ContactForm;
