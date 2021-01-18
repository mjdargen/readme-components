const eightballComponentStyles = require("./index.style");
const simpleIcons = require("simple-icons");
const faultComponent = require("../fault-component");

const eightballComponent = (data = {}) => {
  var { logo, fill, text, textfill, animation, svgfill, desc, scale } = data;
  var ballresponses = ["It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
  ];

  var num = ((Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 67) + Math.floor(Math.random() * 13)) % ballresponses.length);
  desc = " " + ballresponses[num];
  logo = "Magic " + logo + ":";

  if (!logo.match(/^[a-z]*$/) || simpleIcons.get(logo) != undefined) {
    return `
    <svg  height="${scale != undefined ? 60 * scale : "60"}" width="${
      scale == undefined
        ? text == "false"
          ? "70"
          : `${
              80 +
              (desc != undefined ? desc.length * 20 : logo.length * 24) +
              20
            }`
        : text == "false"
        ? "70"
        : `${
            (80 +
              (desc != undefined ? desc.length * 20 : logo.length * 24) +
              20) *
            scale
          }`
    }" xmlns="http://www.w3.org/2000/svg">
    <style>
    ${eightballComponentStyles(fill, textfill, animation, svgfill)}
    </style>
      <foreignObject style="transform:scale(${scale})" height="60" width="${
      text == "false"
        ? "70"
        : `${
            80 +
            (desc != undefined ? desc.length * 20 : logo.length * 24) +
            20
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
        : `<div class="textlogo"><div>${logo}</div></div>`
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
module.exports = eightballComponent;
