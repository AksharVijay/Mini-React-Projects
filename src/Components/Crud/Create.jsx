// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Create = () => {
//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     website: "",
//   });

//   const changeHandler = (event) => {
//     setValues({ ...values, [event.target.name]: [event.target.value] });
//   };

//   const navigate = useNavigate();

//   const submitHandler = (event) => {
//     event.preventDefault();
//     axios
//       .post(`http://localhost:3000/users`, values)
//       .then((res) => {
//         console.log(res);
//         navigate("/");
//       })
//       .catch((err) => console.log(err));
//   };
//   return (
//     <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
//       <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
//         <h1>Add User</h1>
//         <form onSubmit={submitHandler}>
//           <div className="mb-2">
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               name="name"
//               className="form-control"
//               placeholder="Enter Name"
//               onChange={changeHandler}
//             />
//           </div>
//           <div className="mb-2">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               name="email"
//               className="form-control"
//               placeholder="Enter Email"
//               onChange={changeHandler}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="phone">phone:</label>
//             <input
//               type="text"
//               name="phone"
//               className="form-control"
//               placeholder="Enter Phone"
//               onChange={changeHandler}
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="website">Website:</label>
//             <input
//               type="text"
//               name="website"
//               className="form-control"
//               placeholder="Enter Website"
//               onChange={changeHandler}
//             />
//           </div>
//           <button className="btn btn-success">Submit</button>
//           <Link to="/" className="btn btn-primary ms-3">
//             Back
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Create;


// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/users";

// const Create = () => {
//   const navigate = useNavigate();

//   // ──────────────────────────────
//   // State
//   // ──────────────────────────────
//   const [form, setForm]     = useState({ name: "", email: "", phone: "", website: "" });
//   const [loading, setLoading] = useState(false);
//   const [error, setError]     = useState(null);

//   // ──────────────────────────────
//   // Handlers
//   // ──────────────────────────────
//   const handleChange = ({ target: { name, value } }) =>
//     setForm((prev) => ({ ...prev, [name]: value }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     // simple client‑side guard – expand/replace with a schema validator if desired
//     if (!form.name || !form.email) {
//       setError("Name and email are required.");
//       return;
//     }

//     try {
//       setLoading(true);
//       await axios.post(API_URL, form);
//       navigate("/");
//     } catch (err) {
//       console.error(err);
//       setError("Failed to create user. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ──────────────────────────────
//   // Render
//   // ──────────────────────────────
//   return (
//     <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
//       <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
//         <h1 className="mb-4">Add User</h1>

//         {error && (
//           <div className="alert alert-danger py-2" role="alert">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} noValidate>
//           {/** Name */}
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">
//               Name<span className="text-danger">*</span>
//             </label>
//             <input
//               id="name"
//               name="name"
//               type="text"
//               className="form-control"
//               placeholder="Jane Doe"
//               value={form.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/** Email */}
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email<span className="text-danger">*</span>
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               className="form-control"
//               placeholder="jane@example.com"
//               value={form.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/** Phone */}
//           <div className="mb-3">
//             <label htmlFor="phone" className="form-label">
//               Phone
//             </label>
//             <input
//               id="phone"
//               name="phone"
//               type="text"
//               className="form-control"
//               placeholder="+64 21 123 4567"
//               value={form.phone}
//               onChange={handleChange}
//             />
//           </div>

//           {/** Website */}
//           <div className="mb-4">
//             <label htmlFor="website" className="form-label">
//               Website
//             </label>
//             <input
//               id="website"
//               name="website"
//               type="url"
//               className="form-control"
//               placeholder="https://example.com"
//               value={form.website}
//               onChange={handleChange}
//             />
//           </div>

//           {/** Actions */}
//           <button type="submit" className="btn btn-success" disabled={loading}>
//             {loading ? "Saving…" : "Submit"}
//           </button>
//           <Link to="/" className="btn btn-secondary ms-3" disabled={loading}>
//             Back
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Create;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (!formData.name || !formData.email) {
      setError("Name and Email are required.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      navigate("/");
    } catch (err) {
      console.error("Error creating user:", err);
      setError("Something went wrong while creating the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h2 className="mb-4">Add User</h2>

        {error && (
          <div className="alert alert-danger py-2" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email<span className="text-danger">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="form-control"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="website" className="form-label">
              Website
            </label>
            <input
              type="text"
              id="website"
              name="website"
              className="form-control"
              placeholder="Enter website"
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-success" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
          <Link to="/" className="btn btn-secondary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Create;
