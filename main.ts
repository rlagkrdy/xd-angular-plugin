import { Artboard, Group, Text } from "scenegraph";
import {
  getMarginBottom,
  nodeListConvertArray,
  sortArtBoardAsPositionY,
} from "./src/utils";
import {
  convertDnButton,
  convertDnInput,
  convertDnToolbar,
  convertText,
} from "./src/html";

import Vue from "vue";
// @ts-ignore
import Hello from "./src/hello.vue";

async function createDialog(selection: any): Promise<HTMLDialogElement> {
  document.body.innerHTML = `<dialog><div class="container"></div></dialog>`;
  const dialog = document.querySelector("dialog");
  const container = document.querySelector(".container");

  if (!dialog || !container) {
    throw new Error();
  }

  const html = await exportRendition(selection);

  new Vue({
    el: container,
    components: { Hello },
    render(h) {
      return h(Hello, { props: { dialog, html } });
    },
  });

  return dialog;
}

async function exportRendition(selection: any): Promise<string> {
  if (!selection) {
    console.log("no select");
  }

  let html = "<ion-content>\n";

  if (selection.items.length > 0) {
    selection.items.forEach((item: Artboard) => {
      if (item instanceof Artboard) {
        const nodeArray = nodeListConvertArray(item.children);
        const children: any[] = nodeArray.sort(sortArtBoardAsPositionY);

        children.forEach((childNode: Group | Text, index: number) => {
          const margin: number = getMarginBottom(children, index);
          // console.log("margin", margin);

          if (childNode instanceof Group) {
            if (childNode.name === "dm-toolbar") {
              html += convertDnToolbar(childNode);
              html += '<section class="content-section">\n';
            } else if (childNode.name === "dm-input") {
              html += convertDnInput(childNode);
            } else if (childNode.name === "dm-button") {
              html += convertDnButton(childNode);
            } else {
              console.log("childNode", childNode);
            }
          } else if (childNode instanceof Text) {
            html += convertText(childNode);
          }
        });
      }
    });
  }

  html += "</section>\n</ion-content>";
  return html;
}

module.exports = {
  commands: {
    exportRendition: async (selection: any) => {
      const modal = await createDialog(selection);
      modal.showModal();
    },
  },
};
