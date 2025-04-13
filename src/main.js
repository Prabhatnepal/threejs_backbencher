import './style.css'

import * as THREE from 'three';

// create scene
const scene = new THREE.Scene();


//camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ 
canvas: document.querySelector('#canvas'),
});


//render 
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
camera.position.z = 30;

renderer.render(scene, camera);

//create geometry
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);

//create material
const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true });
const torus = new THREE.Mesh(geometry, material);

//add to scene
scene.add(torus);

//animation
function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();


