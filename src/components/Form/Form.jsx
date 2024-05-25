import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./Form.scss"

const Form = () => {

  const navigate = useNavigate()

  const [news, setNews] = useState({
    title: "",
    description: "",
    author: ""
  })

  const [disable, setDisable] = useState(true)
  const [alert, setAlert] = useState("")

  const getForm = (e) => {
    setNews({
      ...news,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("Notice", JSON.stringify(news));
    navigate("/listNews")
  };

  useEffect(() => {
    switch (true) {
      case news.title != "" && news.description != "" && news.author != "":
        setAlert('');
        setDisable(false);
        break;
      case news.title == "" && news.description == "" && news.author == "":
        setAlert('You must fill all the gaps');
        setDisable(true);
        break;
    }
  }, [news])

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Form</h2>
      <form className="p-4 shadow-sm bg-light rounded">
        <div className="form-group mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            placeholder="Enter the news title"
            onChange={getForm}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            placeholder="Enter the description"
            onChange={getForm}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            name="author"
            placeholder="Enter the author"
            onChange={getForm}
          />
        </div>
        <button
          type="submit"
          disabled={disable}
          className="btn btn-primary w-100"
          onClick={handleOnSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form