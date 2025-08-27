import { Head } from "@inertiajs/react";
import { Button } from "@/components/ui/button"; // added

export default function InertiaExample({ name }: { name: string }) {
  return (
    <>
      <Head title="Inertia + Vite Ruby + React Example" />

      <div>
        <Button>Example Button</Button>
      </div>
    </>
  );
}
