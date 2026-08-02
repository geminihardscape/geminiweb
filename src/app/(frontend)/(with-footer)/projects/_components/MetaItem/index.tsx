type MetaItemProps = {
  label: string
  value: string | number
}

const MetaItem = ({ label, value }: MetaItemProps) => {
  return (
    <div className="flex items-center gap-1">
      <dt className="text-tertiary text-sm uppercase">{label} |</dt>
      <dd className="text-white">{value}</dd>
    </div>
  )
}

export default MetaItem
