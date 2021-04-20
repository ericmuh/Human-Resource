import React from 'react';

interface Iprops {
  type: string;
}
function SkeletonElement({ type }:Iprops) {
  const classes = `skeleton ${type}`;

  return (
    <div className={classes}></div>
  )
}

export default SkeletonElement