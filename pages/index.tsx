import Layout from "@/component/Layout"
import { Generator } from "@/component/Generator"
import { useState } from "react"
import { InputArea } from "@/component/InputArea"
import { Footer } from "@/component/Footer"
import styles from "styles/index.module.scss"

const Home = () => {
  const [inputValue, setInputValue] = useState(0)

  return (
    <div className={styles.container}>
      <Layout>
      <InputArea
      inputValue={inputValue}
      setInputValue={setInputValue}
      />
      <Generator size={inputValue}/>
      </Layout>
      <Footer/>
    </div>

  )
}

export default Home