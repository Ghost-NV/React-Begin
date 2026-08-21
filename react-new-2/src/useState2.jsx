import { useState } from "react";

export default function Form({ style }) {
  const [form, setForm] = useState({
    firstName: "Ghost-NV",
    nest1: { email: "seegamemed@gmail.com" },
    nest2: { age: 16 },
    select: "EGP",
  });

  function ChangeMainObj(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function ChangeNestObj(e, theNestedOne) {
    setForm({
      ...form,
      [theNestedOne]: {
        ...form[theNestedOne],
        [e.target.name]: e.target.value,
      },
    });
  }

  return (
    <div style={style}>
      <label>
        <input
          name="firstName"
          type="text"
          value={form.firstName}
          onChange={(e) => ChangeMainObj(e)}
        />
      </label>
      <label>
        <input
          name="email"
          type="email"
          value={form.nest1.email}
          onChange={(e) => ChangeNestObj(e, "nest1")}
        />
      </label>
      <label>
        <input
          name="age"
          type="number"
          value={form.nest2.age}
          onChange={(e) => ChangeNestObj(e, "nest2")}
        />
      </label>
      <label>
        <select
          name="select"
          value={form.select}
          onChange={(e) => ChangeMainObj(e)}
        >
          <option>EGP</option>
          <option>SYR</option>
          <option>KSA</option>
        </select>
      </label>

      <p>
        {Object.values(form)
          .flatMap((val) =>
            typeof val === "object" ? Object.values(val) : val,
          )
          .join(" - ")}
      </p>
    </div>
  );
}
