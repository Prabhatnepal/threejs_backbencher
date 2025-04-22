import * as Three from "three";

function loadTexture(url) {
  const loader = new Three.TextureLoader();
  const texture = loader.load(url);
  return texture;
}

export { loadTexture };
