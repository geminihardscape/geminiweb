type SubtitleProps = {
  subtitle: string
}

const Subtitle = ({ subtitle }: SubtitleProps) => {
  return <p className="flex flex-col items-center text-tertiary uppercase">{subtitle}</p>
}

export default Subtitle
