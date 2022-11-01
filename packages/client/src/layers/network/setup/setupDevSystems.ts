import { defineComponent, Schema, Type, World } from "@latticexyz/recs";

// We should not require this in the ecs browser
export function setupDevSystems(world: World) {
  const DevHighlightComponent = defineComponent(world, { value: Type.OptionalNumber });

  const HoverHighlightComponent = defineComponent(world, {
    x: Type.OptionalNumber,
    y: Type.OptionalNumber,
  });

  async function setContractComponentValue<T extends Schema>() {
    throw new Error("Not implemented");
  }

  return { setContractComponentValue, DevHighlightComponent, HoverHighlightComponent };
}
