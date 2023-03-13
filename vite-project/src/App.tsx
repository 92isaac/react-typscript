import Counter from "./components/Counter"
import Heading from "./components/Heading"
import Section from "./components/Section"
import { useState } from 'react'
import List from "./components/List"


function App() {
  const [count, setCount] = useState<number>(0)


  return (
    <main className="">
      <Heading name='Ayomitan'/>
      <Section >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente itaque aspernatur ipsa quas quaerat id laudantium nostrum dolores odit nisi ratione, cumque vel soluta, blanditiis voluptate aliquam maiores nam accusamus.</Section>
      <Counter setCount={setCount}> {count}</Counter>
      <List items={['olu', 'ola', 'ade']} render={(item: string)=><span>{item}</span>}/>
    </main>
  )
}

export default App
