import { useState } from "react";
import { randomHeadshot, randomColor } from "../utility/randomly";

function Form({ addEmployee, setShowForm }) {
  // useState() -> [state, setState]
  let [form, setForm] = useState({
    name: "",
    title: "",
    phone: "",
    email: ""
  });

  function handleChange(e) {
    // let newForm = { ...form }
    // newForm[e.target.id] = e.target.value
    // setForm(newForm)
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input id="name" value={form.name} onChange={handleChange} />

      <label htmlFor="title">Title</label>
      <input id="title" value={form.title} onChange={handleChange} />

      <label htmlFor="phone">Phone</label>
      <input id="phone" value={form.phone} onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <input id="email" value={form.email} onChange={handleChange} />
    </form>
  );
}

export default Form;
