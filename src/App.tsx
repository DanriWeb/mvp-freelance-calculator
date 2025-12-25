import "./App.css";
import Header from "./components/Header";
import CategoryList from "./components/CategoryList";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <div className="app__main-title-container">
          <h2 className="app__main-title">Выберите категорию проекта</h2>
        </div>
        <CategoryList />
      </main>
    </div>
  );
}

export default App;
