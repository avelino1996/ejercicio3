import { useState } from "react"

export default function NewContactForm({ setContacts  } ) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [city, setCity] = useState("");

    function handleName(e) {
        setName(e.target.value);
    };

    function handleLastName(e) {
        setLastName(e.target.value);
    };

    function handlePhoneNumber(e) {
        setPhoneNumber(e.target.value);
    };

    function handleAddress(e) {
        setAddress(e.target.value);
    };

    function handlePostalCode(e) {
        setPostalCode(e.target.value);
    };

    function handleCity(e) {
        setCity(e.target.value);
    };

    function submit(e) {
        e.preventDefault();

        //     const newContact = {
        //         name: name,
        //         lastName: lastName,
        //         address: address,
        //         postalCode: postalCode,
        //         city: city,
        //         phoneNumber: phoneNumber
        //     };
        const newContact = {name, lastName, address, postalCode, city, phoneNumber};

        setContacts(currentContacts => [...currentContacts, newContact]);
        //e.target.reset();
        setName("");
        setLastName("");
        setPhoneNumber("");
        setAddress("");
        setCity("");
        setPostalCode("");
        
    }


    return(
        <form className="form-group" onSubmit={submit}>
            <input className="form-control mb-3" type="text" value={name} onChange={handleName} placeholder="Introduce el nombre" />
            <input className="form-control mb-3" type="text" value={lastName} onChange={handleLastName} placeholder="Introduce el apellido" />
            <input className="form-control mb-3" type="text" value={phoneNumber} onChange={handlePhoneNumber} placeholder="Introduce número de teléfono" />
            <input className="form-control mb-3" type="text" value={address} onChange={handleAddress} placeholder="Introduce la direccion" />
            <input className="form-control mb-3" type="text" value={postalCode} onChange={handlePostalCode} placeholder="Introduce el código postal" />
            <input className="form-control mb-3" type="text" value={city} onChange={handleCity} placeholder="Introduce la ciudad" />
            <input type="submit" className="btn btn-success" value="Registrar"/>
        </form>
    )
}