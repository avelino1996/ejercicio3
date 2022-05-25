import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import NewContactForm from './components/NewContactForm';


function App() {

  const initialContactsState = [{ name: "Juan", lastName: "Pérez Ruiz", address: "Calle Toledo nº 8", city: "Sevilla", postalCode: "48975", phoneNumber: "645789123" },
                    { name: "Manuel", lastName: "Pardo Días", address: "Calle España nº 6", city: "Jaén", postalCode: "89745", phoneNumber: "745789123" },
                    { name: "Antonio", lastName: "Gómez Cejudo", address: "Calle Bellavista nº 48", city: "Huelva", postalCode: "23547", phoneNumber: "845789123" }
                   ];
  const [contacts, setContacts] = useState(initialContactsState);


  return (
    <div className="container">
      <h2 className='my-4'>Agenda</h2>
      <ContactList contacts={contacts} setContacts={setContacts} />
      <h2 className='my-4'>Nuevo contacto</h2>
      <NewContactForm setContacts= {setContacts} />
    </div>
  );
}



export default App;
