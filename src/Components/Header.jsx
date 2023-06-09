import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <div>
        <nav>
          <ul>
            <li>Inicio</li>
            <li>Productos</li>
          </ul>
        </nav>
        <h1>FFW</h1>
        <nav>
          <ul>
            <li>Sobre Nosotros</li>
            <li>Contacto</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
