"use strict";

const black = "#000";
const white = "#eaeaea";
const red = "#ff2e88";
const green = "#2100f5";
const cyan = green;
const yellow = "#888";
const blue = "#888";
const magenta = "#888";
const lightWhite = "#888";
const lightBlack = "#777";

const colors = {
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  lightBlack,
  lightRed: red,
  lightGreen: green,
  lightYellow: yellow,
  lightBlue: blue,
  lightMagenta: magenta,
  lightCyan: cyan,
  lightWhite,
};

module.exports.decorateConfig = (config) => {
  const cursorColor = config.cursorColor || "rgb(248,29,229)";
  const borderColor = config.borderColor || "#404040";

  const tabText = "#999";
  const tabTextActive = white;
  const dividerBg = "rgba(255,255,255,.2)";

  return Object.assign({}, config, {
    foregroundColor: white,
    backgroundColor: black,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ""}
      .cursor-node {
        mix-blend-mode: difference;
      }
    `,
    css: `
      ${config.css || ""}
      .tab_textInner {
        color: ${tabText};
      }
      .tab_tab.tab_active .tab_textInner {
        color: ${tabTextActive};
      }
      .splitpane_divider {
        background-color: ${dividerBg} !important;
      }
    `,
  });
};
