const colorFiller = require("../utils/colorFiller");

const eightballComponentStyles = (fill, textfill, animation, svgfill) => {
  return `
    foreignObject svg {
        width: 30px;
        height: 30px;
        line-height: 40px;
        margin-top:2px;
        text-align: center;
        fill: ${
          svgfill
            ? colorFiller(svgfill)
            : textfill
            ? colorFiller(textfill)
            : "white"
        };
        animation : ${animation ? `${animation} 4s linear infinite` : ""};
      }

      .gradient-btn {
        display: flex;
        height: 57px;
        padding-left: 15px;
        padding-right: 15px;
        border-radius: 50px;
        float: left;
        color: #fff;
        box-shadow: 5px 5px 2px -2px #78d6b3;
        font-size: 20px;
        font-family: "Space Mono", monospace;
      }
      .text {
        margin-top: 16px;
        margin-left: 10px;
        font-size: 1rem;
        white-space: nowrap;
        font-family: "Space Mono", monospace;
      }
      .textlogo {
        margin-top: 16px;
        margin-left: 10px;
        font-size: 1rem;
        font-weight: bold;
        white-space: nowrap;
        font-family: "Space Mono", monospace;
      }
      .svg {
        margin-top: 10px;
      }
      .btn-color {
        background: ${fill ? colorFiller(fill) : "#8965e0"};
        color : ${textfill ? `#${textfill}` : "white"} ;
      }
      @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
      @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
      @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
  `;
};
module.exports = eightballComponentStyles;
