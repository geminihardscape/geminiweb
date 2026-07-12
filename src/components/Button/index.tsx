import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary'

type ButtonType = {
  label: string
  variant?: ButtonVariant
  href: string
}

const Button = ({ label, variant = 'primary', href }: ButtonType) => {
  const cls: Record<ButtonVariant, string> = {
    primary: 'bg-tertiary py-4 px-8 text-white pointer',
    secondary: 'border border-tertiary text-tertiary py-4 px-8 pointer',
  }
  return (
    <Link className={cls[variant]} href={href}>
      {label}
    </Link>
  )
}

export default Button
