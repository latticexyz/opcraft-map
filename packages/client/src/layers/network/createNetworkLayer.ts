import { createWorld } from "@latticexyz/recs";
import { setupDevSystems } from "./setup";
import { defineItemComponent, definePositionComponent, defineVoxelPositionComponent } from "./components";
import { GameConfig } from "./config";
import { createLoadingSystem } from "./systems";

/**
 * The Network layer is the lowest layer in the client architecture.
 * Its purpose is to synchronize the client components with the contract components.
 */
export async function createNetworkLayer(config: GameConfig) {
  console.log("Network config", config);

  // --- WORLD ----------------------------------------------------------------------
  const world = createWorld();

  // --- COMPONENTS -----------------------------------------------------------------
  const components = {
    Item: defineItemComponent(world),
    Position: definePositionComponent(world),
    VoxelPosition: defineVoxelPositionComponent(world),
  };

  // --- CONTEXT --------------------------------------------------------------------
  const context = {
    world,
    components,
    api: {},
    dev: setupDevSystems(world),
  };

  // --- SYSTEMS --------------------------------------------------------------------
  createLoadingSystem(context);

  return context;
}
