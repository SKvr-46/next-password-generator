import { Button } from "@/component/Button";
import { render, screen, fireEvent, getByRole } from '@testing-library/react';

describe("Buttonコンポーネントのテスト", () => {
    test("setCharactersType,setCountが1回ずつ呼ばれる", () => {
        const setCharactersType = jest.fn();
        const setCount = jest.fn();
        const passwordType = "大文字＆小文字＆記号＆数字";


        const { getByText } = render(
            <Button
            passwordType={passwordType}
            setCharactersType={setCharactersType}
            setCount={setCount}
            />
        );

        fireEvent.click(getByText(passwordType));
        expect(setCharactersType).toHaveBeenCalledWith(1);
        expect(setCount).toHaveBeenCalledTimes(1);
        })
    
    test("ボタンの名前が正しく表示されている", () => {
        const setCharactersType = jest.fn();
        const setCount = jest.fn();
        const passwordType = "大文字＆小文字＆記号＆数字";

        render(
            <Button
            passwordType={passwordType}
            setCharactersType={setCharactersType}
            setCount={setCount}
            />
        );

        expect(
            screen.getByRole("button", {name: passwordType })
        ).toBeInTheDocument();
    })

    test('handlePasswordTypeがクリック時に正確に呼び出される', () => {
        const setCharactersType = jest.fn()
        const setCount = jest.fn()
        render(<Button passwordType="大文字＆小文字＆記号＆数字" setCharactersType={setCharactersType} setCount={setCount} />)
        fireEvent.click(screen.getByRole("button",{name: "大文字＆小文字＆記号＆数字"}))
        expect(setCharactersType).toHaveBeenCalledWith(1)
    })

});