import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "../components/Header";
const inter = Inter({ subsets: ["latin"] });

export default function Projects() {
  return (
    <main>
      <Header />
      <h1>About Page</h1>
      <p>Hi there! My name is Matthew Lee. I coded this webpage.</p>
    </main>
  );
}
