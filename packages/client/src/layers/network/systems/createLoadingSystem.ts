import { NetworkLayer } from "../types";
import { ComponentValue, EntityID, Schema, setComponent } from "@latticexyz/recs";
// This is a dummy state for now, but we will pre-process the real state to have the same structure as this one
import state from "../../../state.json";

export function createLoadingSystem(context: NetworkLayer) {
  const { world, components } = context;

  // Initialize components
  for (const entry of state.state) {
    const entityIndex = world.registerEntity({ id: String(entry.entity) as EntityID });
    const component = components[state.components[entry.component] as keyof typeof components];
    setComponent(component, entityIndex, entry.value as ComponentValue<Schema>);
  }
}
