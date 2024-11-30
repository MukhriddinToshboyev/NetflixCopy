import { useState } from "react";
import "./Aksed.css";

const card = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR 7.99 to EUR 11.99 a month. No extra costs, no contracts.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    question: "Is Netflix good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
  },
  {
    question: "Why am I seeing this language? ",
    answer: "Your browser preferences determine the language shown here.",
  },
];

function Aksed() {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick(index) {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }

  return (
    <div className="aksed-container">
      <h2 className="aksed-text">Frequently Asked Questions</h2>
      <div className="aksed-items">
        {card?.map((item, index) => (
          <div key={index} className="aksed-item">
            <div className="aksed-question" onClick={() => handleClick(index)}>
              {item.question}
              <span className="aksed-item__icon">
                {activeIndex === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    role="img"
                    viewBox="0 0 36 36"
                    width="36"
                    height="36"
                    data-icon="PlusLarge"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    data-icon="PlusStandard"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                )}
              </span>
            </div>
            {activeIndex === index && (
              <div className="aksed-answer">{item.answer} </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aksed;
