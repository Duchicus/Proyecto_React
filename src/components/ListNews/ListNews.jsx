import React, { useContext } from 'react'
import { useEffect } from 'react';
import { NewContext } from "../../context/NewState";
import "./ListNews.scss"

const ListNews = () => {

    const { news, getNews } = useContext(NewContext)

    useEffect(() => {
        getNews();
    }, []);

    return (
        <div className="container mt-4">
            <div className="row">
                {news.map((oneNew, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card" id="oneCard">
                            <div className="card-body">
                                <h5 className="card-title">{oneNew.title}</h5>
                                <p className="card-text">{oneNew.description}</p>
                                <p className="card-text"><small className="text-muted">By {oneNew.author}</small></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListNews