import * as THREE from "three";
import { loadTexture } from "../../../lib/Texture";

class Sun {
  constructor(scene) {
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    this.mesh = new THREE.Mesh(geometry, material);
    scene.add(this.mesh);
  }

  update() {
    // Add any updates or animations for the sun
    this.mesh.rotation.y += 0.01; // example rotation
  }
}
