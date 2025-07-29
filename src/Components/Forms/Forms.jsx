import React, { useState } from "react";
import "./Forms.css";

const Forms = () => {

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile:'',
        gender:'',
        subject:'',
        resume:'',
        url:'',
        about:''
    })

    const handleChange = (event) => {
        setValues({...values, [event.target.name]:[event.target.value]});
               
    }

    const submitHandler = (event) => {
        event.preventDefault();
         console.log(values)
    }

    const resetHandler = () => {
        setValues({firstName: '', lastName: '', email:'', mobile:''});
    }

  return (
    <div className="form-container">
      <form className="form" onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          placeholder="Enter your first name"
          name="firstName"
          className="form-input"
          onChange={(event) => handleChange(event)}
          required
          value={values.firstName}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          placeholder="Enter your last name"
          name="lastName"
          className="form-input"
                    onChange={(event) => handleChange(event)}
          required
          value={values.lastName}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          className="form-input"
                    onChange={(event) => handleChange(event)}
          required
          value={values.email }
        />

        <label htmlFor="mobile">Mobile Number</label>
        <input
          type="text"
          placeholder="Enter your phone number"
          name="mobile"
          className="form-input"
                    onChange={(event) => handleChange(event)}
          required
          value={values.mobile}
        />

        <label>Gender</label>
        <div className="gender-group">
          <label><input type="radio" name="gender"  onChange={(event) => handleChange(event)}  value={values.gender}/> Male</label>
          <label><input type="radio" name="gender"  onChange={(event) => handleChange(event)} value={values.gender}/> Female</label>
          <label><input type="radio" name="gender" onChange={(event) => handleChange(event)} value= {values.gender}/> Other</label>
        </div>

        <label htmlFor="subject">Subject</label>
        <select name="subject" id="subject" className="form-input">
          <option value={values.subject} onChange={(event) => handleChange(event)}>Math</option>
          <option value={values.subject} onChange={(event) => handleChange(event)}>English</option>
          <option value={values.subject} onChange={(event) => handleChange(event)}>Science</option>
        </select>

        <label htmlFor="resume">Resume</label>
        <input
          type="file"
          name="resume"
          className="form-input"
          onChange={(event) => handleChange(event)}
          value={values.resume}
        />

        <label htmlFor="url">Image URL</label>
        <input
          type="text"
          placeholder="Enter image URL"
          name="url"
          className="form-input"
          onChange={(event) => handleChange(event)}
          value={values.url}
        />

        <label htmlFor="about">About</label>
        <textarea
          name="about"
          id="about"
          cols="30"
          rows="5"
          placeholder="Enter description"
          className="form-textarea"
          onChange={(event) => handleChange(event)}
          value={values.about}
        ></textarea>

        <div className="form-buttons">
          <button type="reset" className="form-button reset" onClick={resetHandler}>Reset</button>
          <button type="submit" className="form-button submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
