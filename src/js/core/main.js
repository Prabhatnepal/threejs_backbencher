import * as Three from "three";
import { SolarSystem } from "../scene/SolarSystem";
import { OrbitControls } from "three/examples/jsm/Addons.js";

//create a scene
const scene = new Three.Scene();

//create a camera
const camera = new Three.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.z = 5;
//create a renderer
const canvas = document.querySelector("#canvas");
const renderer = new Three.WebGLRenderer({ canvas });

// setting up the attributes of renderer
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x000000); // black background

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
// render solar system
SolarSystem();

const controls = new OrbitControls(camera, canvas);
controls.dampingFactor = 0.000001;
controls.enableZoom = true;

controls.update();
// render responsive scene(core rendering)
function animate() {
  requestAnimationFrame(animate);

  controls.update();

  renderer.setSize(window.innerWidth, window.innerHeight);

  renderer.render(scene, camera);
}
animate();
export { renderer, scene, camera, canvas };
