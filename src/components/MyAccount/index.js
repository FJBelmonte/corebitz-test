import React, { useState } from "react";

export default function MyAccount(props) {
  return (
    <div className='myAccount'>
      <div className='name'>Olá, {name}</div>
      <div className='email'>{email}</div>
      <button>sair</button>
      <div className='last'>Última compra</div>
      <div className='item'>{item && item}</div>
    </div>
  );
}

MyAccount.defaultProps = {
  name: "Name",
  email: "Email@email.com",
  item: null,
  onExitButton: () => {}
};
