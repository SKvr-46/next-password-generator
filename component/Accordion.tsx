import styles from "styles/accordion.module.scss"

export const Accordion = () => {

    return (
        <div className={styles.container}>
            <p className={styles.state}>各条件に対するパスワードに含まれる文字の候補について：</p>
            <details>
                <summary>大文字＆小文字＆記号＆数字</summary>
                <p>"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?@#$%&"からランダムに選択</p>
            </details>
            <details>
                <summary>大文字＆小文字＆数字</summary>
                <p>"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"からランダムに選択</p>
            </details>
            <details>
                <summary>大文字＆小文字＆記号</summary>
                <p>"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!?@#$%&"からランダムに選択</p>
            </details>
            <details>
                <summary>大文字＆小文字</summary>
                <p> "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"からランダムに選択</p>
            </details>
        </div>
    )
}