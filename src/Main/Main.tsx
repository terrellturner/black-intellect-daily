import "./Main.css";
// import { Quotes } from "../Quotes.tsx";

export default function Main() {
  interface AuthorQuotePortrait {
    authorName?: string;
    authorPortrait?: string;
  }

  function QuoteInfoList() {
    const authorsQuotesPortraits: AuthorQuotePortrait[] = [
      {
        authorName: "Fred Hampton",
        authorPortrait: "..",
      },
      {
        authorName: "Sojourner Truth",
        authorPortrait: "..",
      },
    ];
    return authorsQuotesPortraits as AuthorQuotePortrait;
  }

  console.log(QuoteInfoList);

  return (
    <main>
      <article id="quotes">
        <div id="quote-container">
          <div id="quote-image"></div>
          <div id="quote-and-author">
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
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="description">
          <p>
            Daily quotes from black intellects to grow your mind and expand your
            perspective.
          </p>
        </div>
      </article>
    </main>
  );
}
