import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should render the component with login button in it", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const buttonLogin = screen.getByRole("button", {name: "Login"});

    fireEvent.click(buttonLogin);

    const buttonLogout = screen.getByRole("button", {name: "Logout"})

    expect(buttonLogout).toBeInTheDocument();
})