import Button from '@/components/Button'

type EmptyStateProps = {
  message: string
  ctaLabel?: string
  ctaHref?: string
}

const EmptyState = ({ message, ctaLabel, ctaHref }: EmptyStateProps) => {
  return (
    <div className="border-tertiary/40 mt-10 flex flex-col items-center gap-6 border py-24 text-center">
      <p className="text-muted uppercase">{message}</p>
      {ctaLabel && ctaHref && <Button label={ctaLabel} href={ctaHref} variant="secondary" />}
    </div>
  )
}

export default EmptyState
