import styles from "styles/inputArea.module.scss"
import { useState } from "react"

type InputAreaPropsType = {
    inputValue: number
    setInputValue :  React.Dispatch<React.SetStateAction<number>>
}

export const InputArea = (props: InputAreaPropsType) => {
    const { inputValue, setInputValue } = props
    const [message, setMessage] = useState("")

    const  handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        //文字列の先頭から末尾までが0から9までの数字で構成されているかどうかをチェック
        if (/^[0-9]*$/.test(event.target.value)) {
            setInputValue(Number(event.target.value))
            setMessage("")
        }
        else {
            setMessage("Invalid Input")
        }
    }
    
    return(
        <div className={styles.container}>
            <label>PASSWORD SIZE
            <input 
            type="text" 
            value={inputValue} 
            className={styles.input}
            onChange={handleInputChange} />
            </label>
            <p>{message}</p>
        </div>
    )
}