import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RandomQuote = () => {
  const [randomQuote, setRandomQuote] = useState();

  const New = useCallback(async () => {
    const data = await axios.get("https://dummyjson.com/quotes/random");
    setRandomQuote(data.data);
  });

  useEffect(() => {
    New();
  }, []);

  const NewQuote = () => {
    New();
  };

  if (!randomQuote) return null;
  const { id, quote, author } = randomQuote;
  return (
    <>
      <div className="randomBox border">
        <div>"{quote}"</div>
        <div className="aRandom">-{author}-</div>
      </div>
      <div className="randomButton container2">
        <div className="buttonStyle">
          <Link to="/quote">
            <button className="border">Back</button>
          </Link>
        </div>
        <div className="buttonStyle">
          <button className="border" onClick={NewQuote}>
            Next Quote
          </button>
        </div>
      </div>
    </>
  );
};

export default RandomQuote;
