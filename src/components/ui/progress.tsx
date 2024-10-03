// src/components/ui/progress.tsx

import * as React from "react"

export interface ProgressProps extends React.ProgressHTMLAttributes<HTMLProgressElement> {
  value: number
  max?: number
}

export const Progress: React.FC<ProgressProps> = ({ className, value, max = 100, ...props }) => {
  return (
    <progress className={`progress ${className}`} value={value} max={max} {...props}>
      {value}%
    </progress>
  )
}
