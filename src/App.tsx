import "./App.css";
import Header from "./components/Header";
import ProjectCategoryList from "./components/ProjectCategoryList";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <div className="app__main-title-container">
          <h2 className="app__main-title">Выберите категорию проекта</h2>
        </div>
        <ProjectCategoryList />
      </main>
    </div>
  );
}

export default App;
