export default function ServiceCard({ id, card }) {
  return (
    <div className="h-[400px] w-[320px]" key={id}>
      <div className="relative rounded-xl overflow-hidden">
        <img src={card.image} alt="fund1" className="object-cover h-48 w-96" />
        <div className="absolute top-4 uppercase right-4 leading-tight font-bold w-[70px] h-[70px] flex items-center justify-center bg-white text-black rounded-full text-[10px] text-center">
          {card.circleText}
        </div>
      </div>
      <div className="flex items-center gap-4 my-4 px-2">
        <h1 className="bg-Myrtle-Green px-3 py-1 rounded-md text-white text-[17px] font-medium">
          JD {card.price}
        </h1>
        <p className="text-xs font-bold text-Myrtle-Green">
          <i className="fa fa-clock text-xs text-[14px]" /> {card.date}
        </p>
        <i className="fa fa-heart text-xs text-Myrtle-Green text-[14px] ml-auto" />
      </div>
      <h2 className="font-bold text-[17px] px-2 hover:text-Myrtle-Green transition-colors cursor-pointer">
        {card.topic}
      </h2>
    </div>
  );
}
