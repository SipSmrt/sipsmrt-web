"use client"

import * as React from "react"

interface SpecItem {
  label: string
  value: string
}

interface TechSpecProps {
  icon: React.ReactNode
  label: string
  specs: SpecItem[]
  borderColor: string
}

export default function TechSpec({
  icon,
  label,
  specs,
  borderColor,
}: TechSpecProps) {
  return (
    <div className={`bg-white p-6 rounded-lg border-l-4 ${borderColor}`}>
      <div className="flex items-center gap-3 mb-3">
        <div className="h-6 w-6 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{label}</h3>
      </div>
      <div className="space-y-2 text-sm">
        {specs.map(({ label, value }) => (
          <div key={label} className="flex justify-between">
            <span className="text-muted-foreground">{label}:</span>
            <span className="font-medium">{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
