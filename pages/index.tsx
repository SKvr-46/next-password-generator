import Layout from "@/component/Layout"
import { Generator } from "@/component/Generator"
import { useState } from "react"
import { InputArea } from "@/component/InputArea"
import { Footer } from "@/component/Footer"

const Home = () => {
  const [inputValue, setInputValue] = useState(0)

  return (
    <>
      <Layout>
      <InputArea
      inputValue={inputValue}
      setInputValue={setInputValue}
      />
      <Generator size={inputValue}/>
      </Layout>
      <Footer/>
    </>

  )
}

export default Home