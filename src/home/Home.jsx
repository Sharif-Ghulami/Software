import Hero from "./Hero";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <Hero />
      <Navbar />
      {/* <Test /> */}
    </div>
  );
}

export default Home;

// export function Test() {
//   const Numbers = [1, 2, 3, 4, 5, 6].map((el) => el * 3);
//   // console.log(Numbers);

//   // const essntial = Books.map(book => ({
//   //   title: book.title,
//   //   bookname: book.name
//   // }
//   // ))
//   const Greater = Numbers.filter((fil) => fil > 3).filter((fil) => fil < 12);
//   console.log(Greater);
// }
