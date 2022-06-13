import { render, screen, waitFor } from "@testing-library/react";

import App from "../App";

describe("App", () => {
    it("renders and displays content", async () => {
        render(<App />);
        //await waitFor(() => screen.getAllByText("Type 1 Opt-Out"));
        await waitFor(() => screen.getByText("Type 1 Opt-Out"));
        const header = screen.getByText("Type 1 Opt-Out");
        expect(header).toBeInTheDocument();
    });
});
