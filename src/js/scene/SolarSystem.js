import * as Three from "three";
import { renderer, scene } from "../core/main";
import { Sun } from "../components/stars/Sun";

export function SolarSystem() {
  const solarSystem = new Three.Group();

  const sun = new Sun(scene);
  solarSystem.add(sun);

  scene.add(solarSystem);
}
