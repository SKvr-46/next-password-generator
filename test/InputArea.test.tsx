import { InputArea } from '@/component/InputArea';
import { screen, render, fireEvent } from '@testing-library/react';
import React from "react";

describe("InputArea テスト", () => {
    const inputValue = 1;
    const setInputValue = jest.fn()
    test("PASSWORD SIZEが表示されている", () => {
        render(<InputArea inputValue={inputValue} setInputValue={setInputValue}/>);
        
        expect(
            screen.getByText("PASSWORD SIZE")
        ).toBeInTheDocument();
    })

    test("入力欄が表示されている", () => {
        render(<InputArea inputValue={inputValue} setInputValue={setInputValue}/>);
        const textbox = screen.getByRole("textbox",{name: "PASSWORD SIZE"})
        expect(textbox).toBeInTheDocument();
        expect(textbox).toHaveAttribute("type", "text");
        expect(textbox).toHaveValue(inputValue.toString()); //valueに文字列のinoutvalueをもつ
    })
})