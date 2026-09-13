import Hero from "./Hero";
import Navbar from "./Navbar";
import CompSoftware from "./computerSoftware/CompSoftware";

function Home() {
  return (
    <div className="bg-gray-50 selection:bg-primary-300/90">
      {/* <Hero />   */}
      {/* <Navbar /> */}
      {/* <Test /> */}
      <CompSoftware />
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
