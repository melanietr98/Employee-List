import { useState, useRef } from "react";
import { randomHeadshot, randomColor } from "../utility/randomly";

function Form2({ addEmployee, setShowForm }) {
  let nameRef = useRef();
  let titleRef = useRef();
  let phoneRef = useRef();
  let emailRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    let employee = {
      name: nameRef.current.value,
      title: titleRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      id: crypto.randomUUID(),
      headshot: randomHeadshot(),
      borderColor: randomColor()
    };

    console.log(employee);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" ref={nameRef} />

      <label htmlFor="title">Title</label>
      <input id="title" ref={titleRef} />

      <label htmlFor="phone">Phone</label>
      <input id="phone" ref={phoneRef} />

      <label htmlFor="email">Email</label>
      <input id="email" ref={emailRef} />

      <button>Submit</button>
    </form>
  );
}

export default Form2;
