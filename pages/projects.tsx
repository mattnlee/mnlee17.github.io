import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "../components/Header";
import { Game } from "../components/game/TicTacToe";
import { Footer } from "../components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Projects() {
  return (
    <main>
      <Header />
      <h1>MY CODING PROJECTS:</h1>
      <p>Tic-tac-toe game:</p>
      <br />
      <Game />
    </main>
  );
}
