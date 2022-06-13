import { render, screen, waitFor } from "@testing-library/react";

import App from "../App";

describe("App", () => {
    it("renders and displays content", async () => {
        render(<App />);
        await waitFor(() => screen.getByText("Configuration"));
        const header = screen.getByText("Configuration");
        expect(header).toBeInTheDocument();
    });
});
