import { Head } from "@inertiajs/react";
import { Button } from "@/components/ui/button"; // added

export default function InertiaExample() {
  return (
    <>
      <Head title="Inertia + Vite Ruby + React Example" />

      <div>
        <Button>Example Button</Button>
      </div>
    </>
  );
}
