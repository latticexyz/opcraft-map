import React, { useEffect, useState } from "react";
import { BootScreen, registerUIComponent } from "../engine";
import { concat, map } from "rxjs";
export function registerLoadingState() {
  registerUIComponent(
    "LoadingState",
    {
      rowStart: 1,
      rowEnd: 13,
      colStart: 1,
      colEnd: 13,
    },
    (layers) => {
      const {
        world,
      } = layers.network;

      return concat([1]).pipe(
        map(() => ({
          world,
        }))
      );
    },

    () => {
      const [loading, setLoading] = useState(true);

      // TODO: show the loading screen while we fetch the initial state from cloudflare
      useEffect(() => {
        setTimeout(() => setLoading(false), 100);
      }, [])

      if(loading) return <BootScreen initialOpacity={1}>Connecting</BootScreen>;

      return null;
    }
  );
}
