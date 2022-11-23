import PropTypes from 'prop-types'
import { useSelector } from "react-redux";


import { getContacts, getFilter } from "../../redux/contactsSlice";
import { Contact } from '../Contact/Contact';

import css from './ContactList.module.css';

export const ContactList = () => {
    
    const items = useSelector(getContacts);
    console.log(items);
    const filter = useSelector(getFilter);
    console.log(filter);

    const contactsFilter = () => {
        //const filterNormalize = filter.toLowerCase();

        /*return contact.filter(contact =>
            contact.name.toLowerCase().includes(filterNormalize)
        );*/
    };
    
    //const filteredContacts = contactsFilter();

    return (
        <ul className={css.list}>
            {items.map((contact) => (
                <li key={contact.id} className={css.listItem}>
                    <Contact contact={contact} />
                </li>
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  )
};