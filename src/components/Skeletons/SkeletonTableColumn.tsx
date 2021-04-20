import * as React from "react";

interface Iprops {
  theme?: string;
  columns: Array<any>;
}

const SkeletonTableColumn = ({ theme, columns }: Iprops) => {
  const themeClass = theme || "light";

  return (
    <tr className={`skeleton-wrapper ${themeClass}`}>
      {columns.map((column, key) => (
        <td key={key} className="loading">
          <div className="bar"></div>
        </td>
      ))}
    </tr>
  );
};

export default SkeletonTableColumn;
