import React from 'react'

const stats = [
  { value: "M.Eng", label: "Computer Engineering" },
  { value: "6", label: "Engineering domains" },
  { value: "3", label: "Peer-reviewed papers" },
];

export const Info = () => {
  return (
    <div className="grid grid-cols-3 divide-x divide-line border-y border-line">
      {stats.map((s) => (
        <div key={s.label} className="px-3 py-5 first:pl-0">
          <p className="font-display text-3xl font-medium leading-none text-ink md:text-4xl">
            {s.value}
          </p>
          <p className="mt-2 text-xs leading-snug text-inkSoft">{s.label}</p>
        </div>
      ))}
    </div>
  )
}
