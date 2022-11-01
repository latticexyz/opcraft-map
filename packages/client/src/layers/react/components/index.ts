import { registerComponentBrowser } from "./ComponentBrowser";
import { registerLoadingState } from "./LoadingState";

export function registerUIComponents() {
  registerLoadingState();
  registerComponentBrowser();
}
