const logoComponentStyles = require("./index.style");
const simpleIcons = require("simple-icons");
const faultComponent = require("../fault-component");

const logoComponent = (data = {}) => {
  const { logo, fill, text, textfill, animation, svgfill, desc, scale } = data;

  if (!logo.match(/^[a-z]*$/) || simpleIcons.get(logo) != undefined) {
    return `
    <svg  height="${scale != undefined ? 60 * scale : "60"}" width="${
      scale == undefined
        ? text == "false"
          ? "70"
          : `${
              70 +
              (desc != undefined ? desc.length * 8.5 : logo.length * 8.5) +
              10
            }`
        : text == "false"
        ? "70"
        : `${
            (70 +
              (desc != undefined ? desc.length * 8.5 : logo.length * 8.5) +
              10) *
            scale
          }`
    }" xmlns="http://www.w3.org/2000/svg">
    <style>
    ${logoComponentStyles(fill, textfill, animation, svgfill)}
    </style>
      <foreignObject style="transform:scale(${scale})" height="60" width="${
      text == "false"
        ? "70"
        : `${
            70 +
            (desc != undefined ? desc.length * 8.5 : logo.length * 8.5) +
            10
          }`
    }">
      <div class="gradient-btn btn-color" xmlns="http://www.w3.org/1999/xhtml">
      <div class="svg">
${simpleIcons.get(`${logo}`) != undefined ? simpleIcons.get(logo).svg : logo}
</div>
${
  simpleIcons.get(logo) != undefined
    ? text != "false"
      ? desc != undefined
        ? `<div class="text"><div>${desc}</div></div>`
        : `<div class="text"><div>${logo}</div></div>`
      : ""
    : desc != undefined && text != false
    ? `<div class="text"><div>${desc}</div></div>`
    : ""
}
</div>
</foreignObject>
</svg>

    `;
  } else {
    return faultComponent();
  }
};
module.exports = logoComponent;
