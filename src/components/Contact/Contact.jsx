import PropTypes from 'prop-types'
import { useDispatch } from "react-redux";
import { RiChatDeleteLine } from 'react-icons/ri';
import { deleteContact } from "redux/operations";

import css  from './Contact.module.css';

export const Contact = ({contact}) => {

    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contact.id));

    return (
        <>
            <p className={css.contactDescr}>
                {contact.name}: <span>{contact.phone}</span>
            </p>
            <button className={css.contactBtn} onClick={handleDelete}>
                <RiChatDeleteLine size={25} />
            </button>
        </>
    );
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}