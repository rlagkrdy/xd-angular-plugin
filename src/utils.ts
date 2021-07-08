import { Artboard } from "scenegraph";

export function nodeListConvertArray(nodeList: SceneNodeList) {
  const nodeArray: any[] = [];
  nodeList.forEach((node) => nodeArray.push(node));
  return nodeArray;
}

export function sortArtBoardAsPositionY(a: Artboard, b: Artboard) {
  return a.boundsInParent.y - b.boundsInParent.y;
}

export function getMarginBottom(array: Artboard[], index: number) {
  if (!array[index + 1]) {
    return 0;
  }
  const a = array[index];
  const b = array[index + 1];

  return b.boundsInParent.y - (a.boundsInParent.y + a.boundsInParent.height);
}
