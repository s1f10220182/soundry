// src/components/ui/slider.tsx

import * as React from "react"

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> {
  min?: number
  max?: number
  step?: number
  value?: number | [number, number]
  onValueChange?: (value: number | [number, number]) => void
}

export const Slider: React.FC<SliderProps> = ({ className, min = 0, max = 100, step = 1, value, onValueChange, ...props }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value)
    onValueChange?.(Array.isArray(value) ? [newValue, value[1]] : newValue)
  }

  return (
    <input
      type="range"
      className={`slider ${className}`}
      min={min}
      max={max}
      step={step}
      value={Array.isArray(value) ? value[0] : value}
      onChange={handleChange}
      {...props}
    />
  )
}
