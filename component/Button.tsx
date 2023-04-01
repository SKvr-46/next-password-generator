import styles from "styles/button.module.scss"

type ButtonPropsType = {    
    passwordType: string
    setCharactersType: React.Dispatch<React.SetStateAction<number>>
    setCount: React.Dispatch<React.SetStateAction<number>>
}

export const Button = (props : ButtonPropsType) => {
    const {passwordType, setCharactersType, setCount} = props

    const handlePasswordType = (passwordType: string) => {
        if(passwordType == "大文字＆小文字＆記号＆数字"){
            setCharactersType(1)
        }
        else if(passwordType == "大文字＆小文字＆数字"){
            setCharactersType(2)
        }
        else if(passwordType == "大文字＆小文字＆記号"){
            setCharactersType(3)
        }
        else if(passwordType == "大文字＆小文字"){
            setCharactersType(4)
        }
        //同じボタンを押しても結果が変わるように、カウントすることでレンダリングのトリガーにする
        setCount((prev) => prev + 1)
    }


    return (
        <div>
            <button
            onClick={() => handlePasswordType(passwordType)}
            className={styles.btn}
            >{passwordType}</button>
        </div>
    )
}