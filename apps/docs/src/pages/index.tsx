import { Button } from "@ehtest/core";
import { useIsomorphicLayoutEffect } from "@ehtest/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("ehtest docs page");
  }, []);
  return (
    <div>
      <h1>ehtest Documentation</h1>
      <Button>Click me</Button>
    </div>
  );
}
