import React from "react";
import { cn } from "./utils";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: "default" | "muted";
};

export function Card({ className, tone = "default", ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-800 p-4",
        tone === "default" ? "bg-panel" : "bg-panel-light",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-center justify-between", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-lg font-semibold", className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-3 space-y-3", className)} {...props} />;
}
