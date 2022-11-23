import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from './Container/Container'
import { Section } from './Section/Section'
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Wrapper } from './Wrapper/Wrapper';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { getContacts, getIsLoading, getError } from "redux/contactsSlice";


export function App() {

  const dispatch = useDispatch();

  const items = useSelector(getContacts);
  console.log(items);

  const isLoading = useSelector(getIsLoading);
  console.log(isLoading);
  const error = useSelector(getError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

  return (
    <Container>
      <Section title='Phonebook'>
        <ContactsForm />
        {isLoading && !error && <b>Request in progress...</b>}
      </Section>
      <Section title='Contacts'>
        <Wrapper>
          <Filter />
          <ContactList />
        </Wrapper>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          draggable
        />
      </Section>
    </Container>
  );
}
