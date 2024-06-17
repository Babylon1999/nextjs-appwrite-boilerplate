"use client";

import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex justify-center items-center">
      <Card className="p-4">
        <h2>{error.message}</h2>
        <Button onClick={() => reset()}>Try again</Button>
      </Card>
    </div>
  );
}
