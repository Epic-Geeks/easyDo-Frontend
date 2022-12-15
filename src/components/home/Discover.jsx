import { trend7, trend8 } from "../../assets/images/trending";
import Container from "../Container";
import  partner1  from "../../assets/images/partners/partner1.jpg";

const cards = [
  {
    id: 1,
    image: trend8,
    title: "professionals",
  },
  {
    id: 2,
    image: partner1,
    title: "Certified",
  },
  {
    id: 3,
    image: trend7,
    title: "experience",
  },
];

const DiscoverCard = ({ card }) => {
  return (
    <div className="relative rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform">
      <img src={card.image} alt="discover_image" className="object-cover h-56 w-96" />
      <div className="absolute bottom-10 capitalize left-10 text-white font-bold md:text-[40px] text-[30px]">
        {card.title}
      </div>
    </div>
  );
};

export default function Discover() {
  return (
    <section className="my-4">
      <Container>
        <div>     
          <div className="grid lg:grid-cols-3 mt-8 sm:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-4">
            {cards.map((card) => (
              <DiscoverCard card={card} key={card.id} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
