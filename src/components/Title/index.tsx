type TitleProps = {
  title: string
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-4xl uppercase text-white">{title}</h2>
      <hr className="h-0.5 w-24 bg-tertiary border-0 mt-4" />
    </div>
  )
}

export default Title
