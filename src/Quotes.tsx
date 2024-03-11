import { useEffect, useState } from "react";
import axios from "axios";

interface Quote {
  content?: string;
  author?: string;
}

export const Quotes = () => {
  const [quote, setQuote] = useState<Quote>();

  useEffect(() => {
    const url = "https://api.quotable.io/random";
    axios.get(url).then((res) => {
      setQuote(res.data);
    });
  }, []);

  return (
    <div>
      <p>{quote?.content}</p>
      <span>- {quote?.author}</span>
    </div>
  );
};
