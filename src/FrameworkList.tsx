import React from "react";

type framework = {
  id: number;
  item: string;
};

type Props = {
  frameworks?: framework[];
};

const FrameworkList: React.FC<Props> = ({ frameworks }) => {
  if (!frameworks || !frameworks.length) {
    return <h1>No data !</h1>;
  }
  return (
    <div>
      <ul>
        {frameworks.map(({ id, item }) => {
          return <li key={id}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default FrameworkList;
