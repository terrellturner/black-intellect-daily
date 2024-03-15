import axios from "axios";
import { useEffect, useState } from "react";
import MartinLutherKingJr from "../assets/portraits/martinlutherkingjr.webp";

interface Quote {
  AuthorName: null | string;
  QuoteContent: null | string;
  AuthorPortraitImg: null | string;
}

const url: string =
  "https://api.quotable.io/random?author=martin-luther-king-jr";

export default function Quotes() {
  const [authorQuote, setAuthorQuote] = useState<Quote>({
    AuthorName: null,
    QuoteContent: null,
    AuthorPortraitImg: null,
  });

  useEffect(() => {
    axios.get(url).then((res) => {
      setAuthorQuote(() => ({
        AuthorName: res.data.author,
        QuoteContent: res.data.content,
        AuthorPortraitImg: null,
      }));
      console.log(res);
    });
  }, []);

  return (
    <article id="quotes">
      <div id="quote-container">
        <img id="quote-image" src={MartinLutherKingJr} alt="" />
        <div id="quote-content">
          <span>
            Your quote for{" "}
            {new Date().toLocaleDateString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
            :
          </span>
          <div id="quote-and-author">
            <span>{authorQuote.QuoteContent}</span>
            <span>— {authorQuote.AuthorName}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
