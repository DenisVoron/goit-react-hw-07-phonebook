import PropTypes from 'prop-types'
import { useDispatch } from "react-redux";
import { RiChatDeleteLine } from 'react-icons/ri';
//import { deleteContacts } from "../../redux/contactsSlice";

import css  from './Contact.module.css';

export const Contact = ({contact}) => {

    const dispatch = useDispatch();
    //const handleDelete = () => dispatch(deleteContacts(contact.id));

    return (
        <>
            <p className={css.contactDescr}>
                {contact.name}: <span>{contact.phone}</span>
            </p>
            <button className={css.contactBtn} onClick={()=>{}}>
                <RiChatDeleteLine size={25} />
            </button>
        </>
    );
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}