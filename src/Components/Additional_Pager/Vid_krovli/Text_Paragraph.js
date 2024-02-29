import React from "react";
import "./Vid_Krovli.css"

const Paragraph = ({title, paragraph}) => {
    return(
      <div className={"peaceOfText"}>
            <h1 className={"par"}>{title}</h1>
            <p className={"par"}>{paragraph}</p>
      </div>
    );
}
export default Paragraph;