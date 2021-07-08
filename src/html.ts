import { Group, SceneNode, Text } from "scenegraph";
import { textOption } from "./options";

export function convertDnToolbar(xdGroup: Group): string {
  let html = `<bm-toolbar-back `;

  const text: Text = xdGroup.children.filter((sceneNode) => {
    return sceneNode instanceof Text;
  })[0] as Text;

  html += `title="${text.text}"`;

  html += "></bm-toolbar-back>\n\n";
  return html;
}

export function convertDnButton(xdGroup: Group): string {
  let html = `<bm-button>`;

  const text: Text = xdGroup.children.filter((sceneNode) => {
    return sceneNode instanceof Text;
  })[0] as Text;

  html += `${text.text}</bm-button>\n\n`;
  return html;
}

export function convertDnInput(xdGroup: Group) {
  let html = `<div class="form-control">\n<dm-input `;

  const attribute: any = {};

  xdGroup.children
    .filter((child) => child.children.length > 0)
    .forEach((curr: SceneNode) => {
      const child = curr.children.at(0) as Text;

      if (curr.name === "label") {
        attribute.label = child.text;
      }

      if (curr.name === "placeholder") {
        attribute.placeholder = child.text;
      }
    });

  if (attribute.placeholder) {
    html += `placeholder="${attribute.placeholder}"`;
  }

  if (attribute.label) {
    html += `>${attribute.label}`;
  }

  html += "</dm-input>\n</div>\n\n";
  return html;
}

export function convertText(xdText: Text) {
  const text: string = xdText.text;
  const size: number = xdText.fontSize;
  const weight: string = xdText.fontStyle;
  const lineHeight: number = xdText.lineSpacing;
  const spacing: number = xdText.charSpacing;

  // console.log([size], [lineHeight], [spacing], [weight]);

  const result = textOption[size][lineHeight][spacing][weight];

  const html = `<p class="${result}">${text}</p>\n\n`;

  return html;
}
