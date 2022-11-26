import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, changeFilter } from "../../redux/contactsSlice";

import css from './Filter.module.css';

export const Filter = () => {

    const contactsFilter = useSelector(getFilter);
    const dispatch = useDispatch();
    const changeFieldFilter = e => dispatch(changeFilter(e.currentTarget.value));


    return (
        <label htmlFor="" className={css['inpyt-filter']}>
            Find contacts by name
            <input
                type="text"
                name="filter"
                value={contactsFilter}
                onChange={changeFieldFilter}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
        </label>
    );
    
};

Filter.prototype = {
    filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
}