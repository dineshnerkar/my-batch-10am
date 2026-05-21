import './Accordian.css'
import { useState } from "react";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      title: "About Sachin",
      content:
        "Sachin Tendulkar is a former Indian cricketer and one of the greatest batsmen in cricket history.",
    },
    {
      title: "About Messi",
      content:
        "Lionel Messi is an Argentine football player widely regarded as one of the greatest footballers of all time.",
    },
    {
      title: "About Mike Tyson",
      content:
        "Michael Gerard Tyson (born June 30, 1966) is an American former professional boxer who competed from 1985 to 2005. Nicknamed Iron Mike and Kid Dynamite, Tyson is regarded as one of the greatest heavyweight boxers of all time.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {data.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => handleToggle(index)}
          >
            {item.title}
          </div>

          {activeIndex === index && (
            <div className="accordion-content">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;