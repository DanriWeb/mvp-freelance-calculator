import "./CategoryCard.css";
import type { ProjectCategory } from "../types/project-category";

type ProjectCategoryCardProps = Omit<ProjectCategory, "id">;

export default function ProjectCategoryCard({
  title,
  illustration,
  description,
}: ProjectCategoryCardProps) {
  return (
    <div className="category-card">
      <div className="category-card__title-container">
        <h3 className="category-card__title">{title}</h3>
      </div>
      <div className="category-card__illustration-container">
        <img
          className="category-card__illustration"
          src={illustration}
          alt={title}
        />
      </div>
      <div className="category-card__description-container">
        <p className="category-card__description">{description}</p>
      </div>
    </div>
  );
}
