import { render, screen, waitFor } from "@testing-library/react";

import Home from "../components/Home";
import { BrowserRouter as Router } from 'react-router-dom'

describe("App", () => {
    it("renders and displays content", async () => {
        render(<Router><Home /></Router>);
        await waitFor(() => screen.getByText("Configuration"));
        const header = screen.getByText("Configuration");
        expect(header).toBeInTheDocument();
    });
});
