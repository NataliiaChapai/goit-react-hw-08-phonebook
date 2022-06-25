import { useState } from 'react';
import { SpinnerCircular } from 'spinners-react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import s from './ContactForm.module.css';
import { useGetContactsQuery, useAddContactsMutation } from '../../redux/contacts/contactsApi'

export default function ContactForm() {
    const { data: contacts } = useGetContactsQuery();
    const [addContact, { isLoading }] = useAddContactsMutation();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const handleInputChange = () => event => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (contacts.find(contact => contact.name === name)) {
            return Notify.info(`${name} is already in the contact list`);
        }
        
        addContact({ name, number })
        Notify.info(`${name} was added to the contact list`)
        resetForm();
    }

    function resetForm() {
      setName('');
      setNumber('');
    }

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <label className={s.label} htmlFor="name">
                Name
            </label>
            <input
                className={s.input}
                type="text"
                name="name"
                value={name}
                onChange={handleInputChange(name)}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <label className={s.label} htmlFor="number">
                Number
            </label>
            <input
                className={s.input}
                type="tel"
                name="number"
                value={number}
                onChange={handleInputChange(name)}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <button className={s.btn} type="submit" disabled={isLoading}>
                Add contact
            </button>
            {isLoading && <SpinnerCircular size="30" />}
        </form>
    );
}