import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TransformControls } from "three/examples/jsm/controls/TransformControls.js";

// Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
const canvas = document.querySelector("#canvas");
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// Cube
const geometry = new THREE.BoxGeometry(1.5, 1, 1.7, 2);
const material = new THREE.MeshStandardMaterial({
  wireframe: false,
  roughness: 0.8,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// sphere
const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({
  wireframe: false,
  metalness: 1,
  roughness: 0.1,
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

//load texture
const loader = new THREE.TextureLoader();
const metalTexture = loader.load("../public/img/rusty_metal_1.jpg");
const woodTexture = loader.load("../public/img/wooden_1.jpg");

const woodMat = new THREE.MeshStandardMaterial({ map: woodTexture });
const metalMat = new THREE.MeshStandardMaterial({ map: metalTexture });

cube.material = woodMat;
sphere.material = metalMat;
//light
const ambient = new THREE.DirectionalLight(0xffffff, 2);
scene.add(ambient);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// camera position
camera.position.set(5, 5, 5);
//light position
ambient.position.set(2, 1, 1);

// mesh position
cube.position.set(0, 0, 0);
sphere.position.set(0, 0.9, 0);

// Render Loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  //animate cube
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  // //animate cylinder
  // sphere.rotation.x += 0.03;
  // sphere.rotation.y += 0.03;

  renderer.render(scene, camera);
}
animate();
