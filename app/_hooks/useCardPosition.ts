import { IProject } from "../_models/project.model";

const useCardPosition = (
  projects: IProject[],
  project: IProject,
  columnCount: number,
  cardHeight: number,
  mode: "grid" | "list",
) => {
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

    switch (mode) {
      case "grid":
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
      case "list":
        const padding = cardHeight === 450 ? 80 : 20;
        if (order === 0) {
          return `${order * cardHeight}px`;
        } else {
          return `${order * cardHeight + order * padding}px`;
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
};

export default useCardPosition;
