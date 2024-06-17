import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "../components/Header";
import { Game } from "../components/game/TicTacToe";
const inter = Inter({ subsets: ["latin"] });

export default function Projects() {
  return (
    <main>
      <Header />
      <h1>My Projects</h1>
      <li>A Tic-tac-toe game:</li>
      <Game />
    </main>
  );
}
