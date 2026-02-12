import React from 'react';
import { ComponentType } from "react";
import { FixedSizeList as _FixedSizeList, FixedSizeListProps } from "react-window";

// Cast the imported component to an unknown type, then to a ComponentType
const FixedSizeList = _FixedSizeList as unknown as ComponentType<FixedSizeListProps>;

// A component to render each individual row
const Row = ({ index, style }) => (
  // The 'style' prop is essential; react-window uses it to position the items
  <div style={style}>
    Row {index}
  </div>
);

// The main App component that uses the virtualized list
const FixedSizeListLoad = () => {
  const itemCount = 1000; // Total number of items
  const itemSize = 35;    // Height of each item in pixels

  return (
    <List
      height={400}      // Height of the visible window (viewport)
      width={300}       // Width of the visible window (viewport)
      itemCount={itemCount}
      itemSize={itemSize}
    >
      {Row}
    </List>
  );
};

export default FixedSizeListLoad;