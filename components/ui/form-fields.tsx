"use client";

import { cn } from "@/lib/utils";

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  error?: string;
};

export function Field({ label, name, type = "text", error }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-black text-slate-800">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        aria-invalid={Boolean(error)}
        className={cn(
          "w-full rounded-2xl border bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100",
          error ? "border-red-300" : "border-slate-200",
        )}
      />
      {error ? <p className="mt-1 text-sm font-semibold text-red-600">{error}</p> : null}
    </div>
  );
}

type SelectProps = {
  label: string;
  name: string;
  options: string[];
  error?: string;
  className?: string;
};

export function Select({ label, name, options, error, className }: SelectProps) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-2 block text-sm font-black text-slate-800">{label}</label>
      <select
        id={name}
        name={name}
        defaultValue=""
        aria-invalid={Boolean(error)}
        className={cn(
          "w-full rounded-2xl border bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100",
          error ? "border-red-300" : "border-slate-200",
        )}
      >
        <option value="" disabled>Select one</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      {error ? <p className="mt-1 text-sm font-semibold text-red-600">{error}</p> : null}
    </div>
  );
}
