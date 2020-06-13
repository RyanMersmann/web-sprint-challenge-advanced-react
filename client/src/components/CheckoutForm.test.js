import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from "../App"

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //Arrange
    const app = render(<App />);
    //Act
    const header = app.getByText(/react plants/i)
    //Assert
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const { getByRole, getByLabelText, findAllByText } = render(<CheckoutForm />);

    fireEvent.change(getByLabelText(/first name/i), {
        target: { value: "Ryan" }
      });
      fireEvent.change(getByLabelText(/last name/i), {
        target: { value: "Mersmann" }
      });
      fireEvent.change(getByLabelText(/address/i), {
        target: { value: "5555 Village Road" }
      });
      fireEvent.change(getByLabelText(/city/i), {
        target: { value: "Orem" }
      });
      fireEvent.change(getByLabelText(/state/i), {
        target: { value: "Utah" }
      });
      fireEvent.change(getByLabelText(/zip/i), {
        target: { value: "84057" }
      });

    const button = getByRole('button')
    fireEvent.click(button)
    const formData = findAllByText(/ryan/i)
    expect(formData).toBeInTheDocument
});