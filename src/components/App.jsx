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
import { getIsLoading, getError } from "redux/contactsSlice";

import css from "./App.module.css";


export function App() {

  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

  return (
    <Container>
      <Section title='Phonebook'>
        <ContactsForm />
        {isLoading && !error && <p className={css.loading}>Request in progress...</p>}
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
