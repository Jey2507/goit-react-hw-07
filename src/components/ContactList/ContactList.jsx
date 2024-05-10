import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from "../ContactList/ContactList.module.css";
import { contactValue, selectName } from '../../redux/selectors';


export default function ContactList() {
    const contacts = useSelector(contactValue);
    const nameFilter = useSelector(selectName);

    const contactFilter = contacts.filter((item) =>
        item.name.toLowerCase().includes(nameFilter.toLowerCase())
    );

    return (
        <>
            <ul className={css.list}>
                {contactFilter.map(contact => (
                    <Contact key={contact.id} contacts={contact} />
                ))}
            </ul>
        </>
    );
}
