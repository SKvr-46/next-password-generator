import Layout from "@/component/Layout"
import { Generator } from "@/component/Generator"
import { useState } from "react"
import { InputArea } from "@/component/InputArea"

const Home = () => {
  const [inputValue, setInputValue] = useState(0)

  return (
    <Layout>
      <InputArea
      inputValue={inputValue}
      setInputValue={setInputValue}
      />
      <Generator size={inputValue}/>
    </Layout>
  )
}

export default Home