import * as React from "react"

export type SwitchProps = React.InputHTMLAttributes<HTMLInputElement>

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, ...props }, ref) => {
    return (
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          ref={ref}
          className="hidden"
          {...props}
        />
        <span
          className={`w-10 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out ${className}`}
        >
          <span className="bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out"></span>
        </span>
      </label>
    )
  }
)

Switch.displayName = "Switch"
