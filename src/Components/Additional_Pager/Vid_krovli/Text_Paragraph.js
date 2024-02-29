import React from "react";


const Paragraph = ({title, paragraph}) => {
    return(
      <div className={"peaceOfText"}>
            <h1>{title}</h1>
            <p>{paragraph}</p>
      </div>
    );
}
export default Paragraph;