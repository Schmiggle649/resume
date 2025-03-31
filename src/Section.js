import { useState } from "react";
import "./Section.css";

function Section(props) {
  const [show, changeVisibility] = useState(false);

  function handleClick() {
    changeVisibility(!show);
  }

  return (
    <div>
      <h3>{props.header}</h3>
      <p><span className="show-and-hide" onClick={handleClick}>{show ? "Hide" : "Show"}</span></p>
      {props.subheader && show && <h4>{props.subheader}</h4>}
      {show && props.text.map((item) => (
        <p>{item}</p>
      ))}
      {props.links && show && props.links.map((link) => (
        <a href={link.url}>{link.project}</a>
      ))}
    </div>
  );
}

export default Section;
