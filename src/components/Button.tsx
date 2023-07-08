import React from 'react'

type Props = {
    disabled?: boolean
    className?: string
    children: React.ReactNode
}

const Button = ({
    children,
    disabled = false,
    className
} : Props) => {
  return (
    <button
        disabled={disabled}
        className={"button" + className}
    >
        {children}
    </button>
  )
}

export default Button