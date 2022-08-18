import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { AppContainer } from './App.styled';

const App = () => {
  return (
    <AppContainer>
      <h1>Phonebook</h1>
      <p>You can add new contacts below:</p>
      <ContactForm />
      <p>Your Contacts:</p>
      <Filter />
      <ContactList />
    </AppContainer>
  );
};

export default App;
