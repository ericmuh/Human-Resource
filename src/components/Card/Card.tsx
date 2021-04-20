import * as React from "react";

const Card = (props: any) => (
  <div className={"card" + (props.plain ? " card-plain" : "") + (props.border ? " border": "") }>
    <div className="content">{props.content}</div>
  </div>
);

export default Card;
