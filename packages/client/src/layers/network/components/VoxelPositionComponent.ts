import { World } from "@latticexyz/recs";
import { defineVoxelCoordComponent } from "@latticexyz/std-client";

// This component contains the 3D coordinate of each block
export function defineVoxelPositionComponent(world: World) {
  return defineVoxelCoordComponent(world, { id: "VoxelPosition" });
}
