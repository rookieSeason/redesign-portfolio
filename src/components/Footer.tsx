"use client";

import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <Separator />
      <div className="text-center text-xs text-muted-foreground py-4">
        © {new Date().getFullYear()} Lester John Gatpolintan. All rights
        reserved.
      </div>
    </footer>
  );
}
