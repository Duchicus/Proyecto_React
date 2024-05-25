import React, { createContext } from 'react';
import { useReducer } from 'react';
import NewReducer from "./NewReducer"
import axios from "axios"
const initialState = {
    news: []
}

export const NewContext = createContext(initialState);

export const NewProvider = ({ children }) => {
    const [state, dispatch] = useReducer(NewReducer, initialState);

    const getNews = async () => {
        const res = await axios.get("https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=putFkLljT2nVI6SKNZ8yKpvMGtnXRNBV");
        dispatch({
            type: "GET_NEWS",
            payload: res.data.results,
        })
    };

    return (
        <NewContext.Provider
          value={{
            news: state.news,
            getNews
          }}
        >
          {children}
        </NewContext.Provider>
      );
}




