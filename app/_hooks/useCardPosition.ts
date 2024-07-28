import { IProject } from "../_models/project.model";

export default function useCardPosition(
  projects: IProject[],
  project: IProject,
  columnCount: number,
) {
  function getCardHorizontalOrder() {
    let order = 0;
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].title === project.title) {
        order = i % columnCount;
      }
    }
    return order;
  }

  function getCardVerticalOrder() {
    let order = 0;
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].title === project.title) {
        order = Math.floor(i / columnCount);
      }
    }
    return order;
  }

  function generateLeftPosition() {
    const order = getCardHorizontalOrder();
    return `${order * (100 / columnCount)}%`;
  }

  function generateTopPosition() {
    const order = getCardVerticalOrder();

    if (columnCount < 3) {
      if (order === 0) {
        return `${order * 550}px`;
      } else {
        return `${order * 550 + order * 40}px`;
      }
    } else {
      if (order === 0) {
        return `${order * 600}px`;
      } else {
        return `${order * 600 + order * 40}px`;
      }
    }
  }

  function generateCardWidth() {
    return `${100 / columnCount}%`;
  }

  return {
    generateLeftPosition,
    generateTopPosition,
    generateCardWidth,
  };
}
