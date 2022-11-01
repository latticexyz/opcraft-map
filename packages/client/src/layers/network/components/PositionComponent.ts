import { World } from "@latticexyz/recs";
import { defineCoordComponent } from "@latticexyz/std-client";

// This component contains only the "highest" blocks (for easier access in the 2D map)
export function definePositionComponent(world: World) {
  return defineCoordComponent(world, { id: "Position" });
}
