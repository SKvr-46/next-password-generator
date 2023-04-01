import styles from "styles/generator.module.scss"
import { Button } from "./Button"
import { useState, useEffect} from "react"


type GeneratorPropsType = {
    size: number
}

export const Generator = (props: GeneratorPropsType) => {
    const { size } = props
    const [charactersType, setCharactersType] = useState(0) //4パターンのうちどれか
    const [characters, setCharacters] = useState("") //パスワードの文字候補列
    const [password, setPassword] = useState("")
    const [count, setCount] = useState(0) //レンダリングトリガーのカウント

    // 大文字、小文字、数字、記号を含む文字列
    const characters_u_l_s_n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?@#$%&"

    const characters_u_l_n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    const characters_u_l_s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!?@#$%&"

    const characters_u_l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

//このコメントアウトの書き方だと無限ループした。setした後もswitch文が再度呼び出されていたようだ。
    // switch(charactersType){
    //     case 1:
    //         setCharacters(characters_u_l_s_n)
    //         break
    //     case 2:
    //         setCharacters(characters_u_l_n)
    //         break
    //     case 3:
    //         setCharacters(characters_u_l_s)
    //         break
    //     case 4:
    //         setCharacters(characters_u_l)
    //         break
    //     default:
    //         if(characters !== "") {
    //             setCharacters("")
    //         }
    //         break
    // }


    if(charactersType === 1){
        if(characters !== characters_u_l_s_n){
            setCharacters(characters_u_l_s_n);
        }
    } else if(charactersType === 2){
        if(characters !== characters_u_l_n){
            setCharacters(characters_u_l_n);
        }
    } else if(charactersType === 3){
        if(characters !== characters_u_l_s){
            setCharacters(characters_u_l_s);
        }
    } else if(charactersType === 4){
        if(characters !== characters_u_l){
            setCharacters(characters_u_l);
        }
    } else {
        if(characters !== ""){
            setCharacters("");
        }
    }

    useEffect(() => {
        // 10個のランダムな文字を選択
        let result = "";
        if (characters !== "") {
            for (let i = 0; i < size; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length))
            }
        }
        setPassword(result)
    }, [count])


    return (
        <div className={styles.container}>
            <Button
            passwordType={"大文字＆小文字＆記号＆数字"}
            setCharactersType={setCharactersType}
            setCount={setCount}
            />
            <Button
            passwordType={"大文字＆小文字＆数字"}
            setCharactersType={setCharactersType}
            setCount={setCount}
            />
            <Button
            passwordType={"大文字＆小文字＆記号"}
            setCharactersType={setCharactersType}
            setCount={setCount}
            />
            <Button
            passwordType={"大文字＆小文字"}
            setCharactersType={setCharactersType}
            setCount={setCount}
            />
            <div>
                <p className={styles.password}>生成されたパスワード：{password}</p>
            </div>
        </div>

    )
}