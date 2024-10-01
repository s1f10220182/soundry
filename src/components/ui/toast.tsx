// src/components/ui/toast.tsx

import * as React from "react"

export interface ToastActionElement {
  label: string
  onClick: () => void
}

export interface ToastProps {
  open?: boolean // 'open' をオプショナルに変更
  onOpenChange?: (open: boolean) => void
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
  variant?: "default" | "destructive" // 'variant' プロパティを追加
}

export const Toast: React.FC<ToastProps> = ({
  open = true,
  onOpenChange,
  title,
  description,
  action,
  variant = "default",
}) => {
  const handleClose = () => {
    if (onOpenChange) {
      onOpenChange(false)
    }
  }

  return (
    <div>
      {open && (
        <div className={`toast toast-${variant}`}>
          <div className="toast-header">
            <h4>{title}</h4>
            <button onClick={handleClose}>×</button>
          </div>
          <div className="toast-body">
            <p>{description}</p>
            {action && (
              <button onClick={action.onClick}>{action.label}</button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
