import { useState } from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {getContacts } from "../../redux/contactsSlice";
import { addContacts } from "redux/operations";
//import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

import css from './ContactsForm.module.css';


export function ContactsForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const contact= useSelector(getContacts);
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();

        /*const addContact = [
            name,
            phone,
        ];*/

        contact.some(currentName => currentName.name.toLowerCase() === name.toLowerCase())
      ? toast.warn(`${name} is already in contact`)
      : dispatch(addContacts(name, phone));

        reset();
    };

    const reset = () => {
        setName('');
        setPhone('');
    };
    

    const handleNameChange = event => {
        const {name, value} = event.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setPhone(value);
                break;
            default:
                return;
        }
    };

    return (
        <div className={css.wrapper}>
            <form autoComplete='off' className={css.form} onSubmit={handleSubmit}>
                <label className={css['form-label']}>
                    Name
                    <input
                        type="text"
                        className={css.input}
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={handleNameChange}
                    />
                </label>
                <label htmlFor="">
                    Number
                    <input
                        type="tel"
                        className={css.input}
                        name="number"
                        value={phone}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={handleNameChange}
                    />
                </label>
                <button type='submit' className={css.formBtn}>
                    Add Contact
                </button>
            </form>
        </div>
    );

}