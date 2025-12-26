import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__title-container">
        <h1 className="header__title">
          <span className="header__title--full">💎 Freelance Calculator</span>
          <span className="header__title--short">💎 FC</span>
        </h1>
      </div>
    </header>
  );
}
