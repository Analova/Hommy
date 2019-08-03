import React, { Component } from "react";
import { FaCocktail, FaHiking, FaChild, FaCoins } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Find homes first",
        info:
          " You see the latest listings every 5 minutes and get new home updates 3 hours faster."
      },
      {
        icon: <FaHiking />,
        title: "Tour faster",
        info: " Book online and tour homes ASAP, even same day."
      },
      {
        icon: <FaChild />,
        title: "Save $8,400 on average",
        info:
          " you save thousands and get full service when you buy and sell with Hommy."
      },
      {
        icon: <FaCoins />,
        title: "Pay ad low as 1% listing fee",
        info:
          "With a Hommy Agent, you get full service and save thousands in fees."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <div className="white-bg">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
