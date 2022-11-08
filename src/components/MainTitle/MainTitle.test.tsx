import MainTitle from "./MainTitle";
import {render, screen} from "@testing-library/react";
import React from "react";
import App from "../../App";

describe('test of main title', ()=>{
    test('exist of element', ()=>{
        render(<MainTitle/>)
        const mainTitleElem = screen.getByTestId('main-title');
        expect(mainTitleElem).toBeInTheDocument();
    })
    test('check heading text', ()=>{
        render(<App/>)
        const mainTitleElem = screen.getByTestId('main-title');
        expect(mainTitleElem.textContent).toBe('todos')
        expect(mainTitleElem.textContent).toMatchSnapshot()
    })
})