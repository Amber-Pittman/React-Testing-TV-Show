import React from "react";

import App from "./App";

import * as rtl from "@testing-library/react";
//import { fetchShow as mockFetchShow } from "./api/fetchShow";


describe("App", () => {
    let wrapper;

    afterEach(rtl.cleanup);
    beforeEach(() => {
        wrapper = rtl.render(<App />);
    })

    it("The app renders on the page", async() => {
        const text = await wrapper.findByText("Select a season");
        expect(text).toBeInTheDocument();
    })
});