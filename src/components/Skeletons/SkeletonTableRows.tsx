import * as React from "react";
import SkeletonTableColumn from "./SkeletonTableColumn";

interface IProps {
  columns: Array<any>;
}

const SkeletonTableRows = ({ columns }: IProps) => {
  return (
    <>
      <SkeletonTableColumn columns={columns} />
      <SkeletonTableColumn columns={columns} />

      <SkeletonTableColumn columns={columns} />

      <SkeletonTableColumn columns={columns} />
    </>
  );
};

export default SkeletonTableRows;
