import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext"

import "./BuyingForm.css";


function BuyingForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const {cart, totalPrice } = useCartContext ();


  const handleSubmit = (event) => {
    event.preventDefault();
    
    const formData = {
        usuario:{
            name: name,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            paymentMethod: paymentMethod,
      },
      items: cart.map(producto => ({ id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: producto.Contador})),
      total: totalPrice()}
      console.log(formData);

      const db =getFirestore();
      const orderCollection = collection(db, 'orders')
      addDoc(orderCollection, formData)
    };



  return (
    <form onSubmit={handleSubmit} className="buying-form">
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Apellido"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        className="form-input"
      />
      <input
        type="number"
        placeholder="Numero de telefono"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
        className="form-input"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="form-input"
      />
      <select
        value={paymentMethod}
        onChange={(event) => setPaymentMethod(event.target.value)}
        className="form-input"
      >
        <option value="">Seleccione metodo de pago</option>
        <option value="debit">Débito</option>
        <option value="credit">Crédito</option>
      </select>
      <button type="submit" className="form-button">
        Comprar
      </button>
    </form>
  );
}

export default BuyingForm;
