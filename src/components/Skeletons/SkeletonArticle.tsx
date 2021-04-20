import * as React from "react";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

interface Iprops {
  theme: string;
}

const SkeletonArticle = ({ theme }: Iprops) => {
  const themeClass = theme || "light";

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-article">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonArticle;
