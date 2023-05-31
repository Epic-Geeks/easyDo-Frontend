import ServiceCard from "./ServiceCard";
import { trend1, trend2,trend8,trend7 } from "../../assets/images/trending";
import { service1 } from "../../assets/images/services";
const cards = [
  {
    id: 1,
    price: "15",
    date: "14.05.24",
    topic: "professional teams to cleaning",
    image: service1,
    circleText: "Discover your match",
  },
  {
    id: 2,
    price: "120",
    date: "14.05.24",
    topic:
      "Cleaning chimneys and surfaces with the highest skill",
    image: trend2,
    circleText: "LOGIN TO MATCH",
  },
  {
    id: 3,
    price: "30",
    date: "14.05.24",
    topic:
      "The annual integration of communication systems in the new thales",
    image: trend8,
    circleText: "DISCOVER HOW MUCH YOU MATCH",
  },
  {
    id: 4,
    price: "75",
    date: "14.05.24",
    topic: "Building through professional engineers",
    image: trend7,
    circleText: "DISCOVER HOW MUCH YOU MATCH",
  }
];

export default function ServiceCards() {
  return (
    <article 
    className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-4">
      {cards.map((card) => (
        <ServiceCard id={card.id} key={card.id} card={card} />
      ))}
    </article>
  );
}