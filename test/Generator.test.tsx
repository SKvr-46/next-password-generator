import { Generator } from "@/component/Generator";
import { screen, render, fireEvent } from '@testing-library/react';
import React from "react";

describe("generatorコンポーネントのテスト", () => {
    const size = 10;
    const passwordType = "大文字＆小文字＆記号＆数字"

    test("ボタンが表示される", () => {
        render(<Generator size={size}/>);

        expect(
            screen.getByText(passwordType)
        ).toBeInTheDocument();
    })
})
