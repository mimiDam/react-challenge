import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./css/quote.css";

const Quote = () => {
  const [quote, setQuote] = useState();

  const Api = useCallback(async () => {
    const data = await axios.get("https://dummyjson.com/quotes");
    setQuote(data.data);
  });

  useEffect(() => {
    Api();
  }, []);

  if (!quote) return null;

  const { quotes, total, limit } = quote;

  return (
    <>
      <div className="random">
        <Link to="/randomquote">
          <button>Random Quote</button>
        </Link>
      </div>
      <div className="quotes container1">
        {quotes.map((data) => {
          const { id, quote, author } = data;
          return (
            <>
              <div className="box">
                <div className="id border">{id}</div>
                <div className="id border q">"{quote}"</div>
                <div className="id border a">{author}</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Quote;
