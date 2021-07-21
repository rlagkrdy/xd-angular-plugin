import {
  ZeplinApi,
  Configuration,
  Color,
  Component,
  ComponentVersion, ComponentSection,
} from "@zeplin/sdk";
import { Layer } from "@zeplin/sdk/dist/models/layer";

const zeplinClient: ZeplinApi = new ZeplinApi(
  new Configuration({
    accessToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoicGVyc29uYWxfYWNjZXNzX3Rva2VuIiwiY2xpZW50X2lkIjoiNjBlNzIwOThmYmUxYzU2ZWY3MDM0NjBjIiwic2NvcGUiOiJhZG1pbiIsImlhdCI6MTYyNTc1OTg5NiwiZXhwIjoxOTQxMzI5MTU2LCJpc3MiOiJ6ZXBsaW46YXBpLnplcGxpbi5pbyIsInN1YiI6IjYwYjgyYzRhM2NlODQwMWM4MDUxOWIwNiIsImp0aSI6ImYzNGMwM2M1LTk3MjAtNDI2OS1iYmYzLTBhYjM0OGRkZDM3MCJ9.c5QFkkzY8tOghEHgjWx-jZz7cyQ_TjVb-Zhfk3Nslfg",
  })
);

// zeplinClient.colors.getProjectColors("6077cb2970a06f45560d1222").then((res) => {
//   const colors: Color[] = res.data;
//
//   colors
//     .map((color: Color) => {
//       const rgba = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
//       return {
//         name: color.name,
//         rgba,
//       } as RgbaColor;
//     })
//     .forEach((rgbaColor: RgbaColor) => {
//       console.log(rgbaColor.name, rgba2hex(rgbaColor.rgba));
//     });
// });

zeplinClient.screens.getLatestScreenVersion('6077cb2970a06f45560d1222', '60f7bda9bcaa4912a2684f5d')
    .then((result) => {
      console.log(result)
      // const cs: ComponentSection = result.data.filter(data => data.id === '60c1ba26ef9991bf1e41f36b')[0] as ComponentSection;
      //
      // cs.groups.forEach(id => {
      //   zeplinClient.components.
      // })
    })

// zeplinClient.components
//   .getProjectComponentLatestVersion(
//     "6077cb2970a06f45560d1222",
//     "60de9ed68fdf2c3ced608256"
//   )
//   .then((res) => {
//     const cv: ComponentVersion = res.data;
//
//     console.log("components", cv.assets[0].layerName);
//
//     const layers: Layer[] = cv.layers;
//     const layer = layers[0];
//     // layers.forEach(layer => {
//     console.log(layer);
//     console.log(layer.fills);
//     const color = layer.fills[0].color;
//     const rgba = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
//     console.log(rgba2hex(rgba));
//
//     console.log(layer.rect);
//     console.log(layer.opacity);
//     console.log(layer.borderRadius);
//     // })
//   })
//   .catch((err) => console.log("err", err));

// zeplinClient.components
//   .getProjectComponentLatestVersion(
//     "6077cb2970a06f45560d1222",
//     "60d9da518d928b115e0bef36"
//   )
//   .then((res) => {
//     const cv: ComponentVersion = res.data;
//
//     console.log("cv", cv);
//     console.log("components", cv.assets[0].layerName);
//   });

// zeplinClient.styleguides
//   .getStyleguide("6077cb2970a06f45560d1222")
//   .then((result) => {
//     console.log(result);
//   });

function rgba2hex(rgbaParam: string) {
  let rgba = rgbaParam.match(
    /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
  );

  return rgba && rgba.length === 4
    ? "#" +
        ("0" + parseInt(rgba[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgba[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgba[3], 10).toString(16)).slice(-2)
    : "";
}

type RgbaColor = {
  name: string;
  rgba: string;
};
