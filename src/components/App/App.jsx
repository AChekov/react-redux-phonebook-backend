import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { AppContainer } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <AppContainer>
      <h1>Phonebook</h1>
      <p>You can add new contacts below:</p>
      <ContactForm />
      <p>Your Contacts:</p>
      <Filter />
      <ContactList />
      <ToastContainer autoClose={2500} />
    </AppContainer>
  );
};

export default App;
