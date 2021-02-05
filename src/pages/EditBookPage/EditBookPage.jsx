import React, { useState, useRef, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';

export default function EditBookPage({handleUpdateBook}){
  const location = useLocation();
  const [invalidForm, setInvalidForm] = useState(true);
  const [formData, setFormData] = useState(location.state.book);
  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setInvalidForm(false) : setInvalidForm(true);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault()
    handleUpdateBook(formData);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <h1>Edit Book Details</h1>
      <form  autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Book Title</label>
          <input
            className="form-control"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Genre</label>
          <input
            className="form-control"
            name="genre"
            value={ formData.genre}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Date published</label>
          <input
            className="form-control"
            name="published"
            value={ formData.published}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn"
          onClick={handleSubmit}
          disabled={invalidForm}
        >
          Save Changes
        </button>
        <Link to="/books">Cancel</Link>
      </form>
    </>
  );
  
}