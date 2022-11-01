import { World } from "@latticexyz/recs";
import { defineNumberComponent } from "@latticexyz/std-client";

export function defineItemComponent(world: World) {
  return defineNumberComponent(world, { id: "Item" });
}
