import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "../components/Header";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const blah = [1, 2, 3, 4, 5, 6, 7].map((a, b) => {
    return <Header />;
  });
  const blah2 = [1, 2, 3, 4, 5, 6, 7].map((n, i) => {
    return (
      <p>
        {n},{i},{n * i}, {n * n}
      </p>
    );
  });
  const blah3 = ["a", "b", "c"].map((letter, index) => {
    return (
      <p>
        {index}:{letter}
      </p>
    );
  });
  return (
    <main>
      <Header />
      {blah}
      <p>{blah2}</p>
      <p>{blah3}</p>
      <p>Hello world! My name is Matt</p>
    </main>
  );
}
