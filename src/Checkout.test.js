import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CartContext } from "./Contexts/CartContext";
import Checkout from "./Components/Checkout";


describe("Checkout component", () => {
    it("should render the total price correctly when there are items in the cart", () => {
        const totalPrice = 50;
        const { getByText } = render(
            <CartContext.Provider value={{ totalPrice }}>
                <Checkout />
            </CartContext.Provider>
        );

        expect(getByText("Checkout")).toBeInTheDocument();
        expect(getByText("Total Price")).toBeInTheDocument();
        expect(getByText(`${totalPrice}TL`)).toBeInTheDocument();
        expect(getByText("Checkout")).toHaveAttribute("href", "/");
    });

    it("should not render anything when there are no items in the cart", () => {
        const { container } = render(
            <CartContext.Provider value={{ totalPrice: 0 }}>
                <Checkout />
            </CartContext.Provider>
        );

        expect(container.firstChild).toBeNull();
    });
});









