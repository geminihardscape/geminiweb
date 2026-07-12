import * as React from 'react'

export const Width: React.FC<{
  children: React.ReactNode
  className?: string
  width?: number | string
}> = ({ children, className, width }) => {
  const widthNumber = width ? Number(width) : 100
  const isFullWidth = !width || widthNumber >= 100

  return (
    <div
      className={className}
      style={{ width: isFullWidth ? '100%' : `calc(${widthNumber}% - 8px)` }}
    >
      {children}
    </div>
  )
}
