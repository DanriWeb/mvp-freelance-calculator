import "./CategoryList.css";
import ProjectCategoryCard from "./ProjectCategoryCard";
import { projectCategories } from "../data/project-categories";

export default function ProjectCategoryList() {
  return (
    <div className="category-list">
      {projectCategories.map((category) => (
        <ProjectCategoryCard
          key={category.id}
          title={category.title}
          illustration={category.illustration}
          description={category.description}
        />
      ))}
    </div>
  );
}
