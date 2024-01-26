import React, { Children, useEffect } from 'react'

function Button( { className, children} ) {

  useEffect(() => {
    document.querySelectorAll(".generate-button").forEach((button) => {
    const strokeGroup = document.createElement("div");
    strokeGroup.classList.add("stroke");

    const { svg: stroke } = createSVG( {
        x: "0",
        y: "0",
        width: "100%",
        height: "100%",
        rx: parseInt(getComputedStyle(button).borderRadius, 10),
        ry: parseInt(getComputedStyle(button).borderRadius, 10),
        pathLength: "7",
    });

    strokeGroup.appendChild(stroke);
    // strokeGroup.appendChild(stroke.cloneNode(true));

    button.appendChild(strokeGroup);

    
    });
  })
  const createSVG = (childAttributes) => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    const child = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );

    var i = 0
    for (const attr in childAttributes) {
        child.setAttribute(attr, childAttributes[attr]);
    }
    svg.appendChild(child);

    return { svg, child };
  };


  return (
      <div className={className}>
        {children}
      </div>  
  )
}

export default Button