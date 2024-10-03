import * as React from "react"

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  // カスタムプロパティをここに追加
  label?: string; // 例: チェックボックスのラベル
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        className={`h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)

Checkbox.displayName = "Checkbox"
