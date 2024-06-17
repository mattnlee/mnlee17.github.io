export function Header() {
  return (
    <div style={{ border: "3px solid red" }}>
      <ul>
        <li>
          <a class="active" href="/">
            Home
          </a>
        </li>
        <li>
          <a href="/projects">PB&J Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </div>
  );
}
