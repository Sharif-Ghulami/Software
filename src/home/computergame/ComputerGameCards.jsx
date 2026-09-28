import aliens from "./images/aliens_fireteam_elite_2.png";
import codeVein from "./images/code_vein_ii.png";
import dune from "./images/dune_awakening.png";
import warzone from "./images/call_of_duty_warzone_season_6.png";
import halloween from "./images/halloween_the_game.png";
import salvation from "./images/salvation_echoes_of_war.png";
import assetto from "./images/assetto_corsa.png";
import onimusha from "./images/onimusha_way_of_the_sword.png";

const cards = [
  {
    image: aliens,
    title: "Aliens Fireteam Elite 2",
  },
  {
    image: codeVein,
    title: "CODE VEIN II",
  },
  {
    image: dune,
    title: "Dune: Awakening",
  },
  {
    image: warzone,
    title: "Call of Duty Warzone Season 6",
  },
  {
    image: halloween,
    title: "Halloween The Game",
  },
  {
    image: salvation,
    title: "Salvation Echoes of War",
  },
  {
    image: assetto,
    title: "Assetto Corsa",
  },
  {
    image: onimusha,
    title: "Onimusha Way of the Sword",
  },
];

// function Card({ Image, title }) {
//   return (
//     <div className="group hover:scale-105 flex flex-col justify-center items-center ">
//       <img className="h-64 w-auto rounded-2xl pb-4" src={Image} alt="title" />

//       <h3>{title}</h3>
//     </div>
//   );
// }

function ComputerGameCards() {
  return (
    <div className=" grid grid-cols-1 gap-12 mt-8 lg:grid-cols-2 xl:grid-cols-3  ">
      {cards.map((card, index) => (
        <div
          key={index}
          className="group flex flex-col  justify-center items-center"
        >
          <div className="overflow-hidden border rounded-4xl border-gray-200 ">
            <img
              src={card.image}
              alt={card.title}
              className="size-full object-cover group-hover:scale-105 scale-100 transition duration-200  "
            />
          </div>
          <h3 className="group-hover:text-primary-600 ">{card.title}</h3>
        </div>
      ))}
    </div>
  );
}
export default ComputerGameCards;

// function ComputerGameCards() {
//   return cards.map((card, index) => (
//     <div>
//       <div>
// <img src={card.image} key={index} alt={card.title} />
//         {card.image}
//       </div>
//       <h3 className="">{card.title}</h3>
//     </div>
//   ));
// }

// function ComputerGameCards() {
//   return (
//     <div className=" grid grid-cols-1 gap-12 mt-8 lg:grid-cols-2 xl:grid-cols-3">
//       {cards.map((card) => (
//         <Card key={card.title} Image={card.Image} title={card.title} />
//       ))}
//     </div>
//   );
// }
