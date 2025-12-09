"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { BusFront } from "lucide-react";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={cn(
        "font-normal flex gap-2 justify-center items-center text-sm text-black px-2 py-1 shrink-0 relative z-20",
        className
      )}
    >
      <div className="bg-orange-600 rounded-lg p-1">
        <BusFront className="w-5 h-5 text-white" />
      </div>

      <span className="font-bold text-black dark:text-white text-lg tracking-tight">Transportes<span className="text-orange-600">Premium</span></span>
    </Link>
  );
};
