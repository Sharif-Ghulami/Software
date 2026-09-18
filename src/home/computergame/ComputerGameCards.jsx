import callof from "./images/callof.png";
import counter from "./images/counter.png";
import gta from "./images/gta.png";
import IGI from "./images/igi2.png";
import taken from "./images/taken.png";
import warcraft from "./images/warcraft.png";

const cards = [
  {
    Image: callof,
    title: "Call of Duty",
  },
  {
    Image: counter,
    title: "Counter-Strike",
  },
  {
    Image: gta,
    title: "gta",
  },
  {
    Image: IGI,
    title: "IGI 2",
  },
  {
    Image: taken,
    title: "Taken",
  },
  {
    Image: warcraft,
    title: "Warcraft",
  },
];

function Card({ Image, title }) {
  return (
    <div className="group hover:scale-105 flex flex-col justify-center items-center ">
      <img className="h-64 w-auto rounded-2xl pb-4" src={Image} alt="title" />

      <h3>{title}</h3>
    </div>
  );
}

function ComputerGameCards() {
  return (
    <div className=" grid grid-cols-1 gap-12 mt-8 lg:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => (
        <Card key={card.title} Image={card.Image} title={card.title} />
      ))}
    </div>
  );
}

export default ComputerGameCards;
