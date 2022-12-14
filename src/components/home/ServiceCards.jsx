import ServiceCard from "./ServiceCard";
import 
  img
 from "../../assets/home/front6.jpg";

const cards = [
  {
    id: 1,
    price: "234,378,123",
    date: "14.05.24",
    topic: "Call topic - IOT in automated vechiles for fishing purposes",
    image: img,
    circleText: "Discover your match",
  },
  {
    id: 2,
    price: "103,000",
    date: "14.05.24",
    topic:
      "Initiative Proposition - Creating AI driven buses for a better connected Europe.",
    image: img,
    circleText: "LOGIN TO MATCH",
  },
  {
    id: 3,
    price: "25,000,000",
    date: "14.05.24",
    topic:
      "The annual integration of communication systems in the new thales",
    image: img,
    circleText: "DISCOVER HOW MUCH YOU MATCH",
  },
  {
    id: 4,
    price: "3,120,000",
    date: "14.05.24",
    topic: "Program life us expanding its offers for call for proposals",
    image: img,
    circleText: "DISCOVER HOW MUCH YOU MATCH",
  },
  {
    id: 5,
    price: "234,378,123",
    date: "14.05.24",
    topic: "Ms. Afrodita la Carasco application process specialist",
    image: img,
    circleText: "85% match",
  },
  {
    id: 6,
    price: "103,000",
    date: "14.05.24",
    topic: "Mr. Dubi Gerber former EU application evaluator",
    image: img,
    circleText: "95% match",
  },
  {
    id: 7,
    price: "25,000,000",
    date: "14.05.24",
    topic:
      "Initiative Proposition - Creating AI driven buses",
    image: img,
    circleText: "91% match",
  },
  {
    id: 8,
    price: "3,120,000",
    date: "14.05.24",
    topic: "Program life us expanding its offers for call for proposals",
    image: img,
    circleText: "90% match",
  },
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