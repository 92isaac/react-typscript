import { ReactNode } from "react";

type SectionProps ={
    title?:string,
    children: ReactNode
}

const Section = ({children, title='Lorem section'}: SectionProps) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{children}</p>
    </div>
  )
}

export default Section
