"use client"

import * as React from "react"
import { LucideIcon } from "lucide-react"

interface TechFeatureProps {
  icon: LucideIcon
  iconColor: string
  iconBg: string
  borderColor: string
  title: string
  description: string
  tags: string[]
}

export default function TechFeature({
  icon: Icon,
  iconColor,
  iconBg,
  borderColor,
  title,
  description,
  tags,
}: TechFeatureProps) {
  return (
    <div className={`bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border ${borderColor}`}>
      <div className="flex items-start gap-4">
        <div className={`rounded-lg ${iconBg} p-3`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`${iconBg} ${iconColor.replace("text-", "text-")} text-xs rounded-full px-2 py-1`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
