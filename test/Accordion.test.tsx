import { Accordion } from "../component/Accordion";
import { render, screen } from '@testing-library/react';


describe("文字の表示テスト", () => {
    test("アコーディオンのタイトルが表示される", () => {
        render(<Accordion/>);
        expect(
            screen.getByText("各条件に対するパスワードに含まれる文字の候補について：")
        ).toBeInTheDocument();
    });
    test("大文字＆小文字＆記号＆数字の内容", () => {
        render(<Accordion/>);
        expect(
            screen.getByText('"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?@#$%&"からランダムに選択')
        ).toBeInTheDocument();
    });
    test("大文字＆小文字＆数字の内容", () => {
        render(<Accordion/>);
        expect(
            screen.getByText('"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"からランダムに選択')
        ).toBeInTheDocument();
    });
    test("大文字＆小文字＆記号の内容", () => {
        render(<Accordion/>);
        expect(
            screen.getByText('"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!?@#$%&"からランダムに選択')
        ).toBeInTheDocument();
    });
    test("大文字＆小文字", () => {
        render(<Accordion/>);
        expect(
            screen.getByText('"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"からランダムに選択')
        ).toBeInTheDocument();
    });
})
