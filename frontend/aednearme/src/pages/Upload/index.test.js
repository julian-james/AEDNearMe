import axios from "axios";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { default as Upload } from "./Upload";
jest.mock("axios");

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Upload", () => {
  test("render", async () => {
   
    render(<Upload />);

    const lat = screen.getByLabelText("Latitude");
    const long = screen.getByLabelText("Longitude");
    // const access = screen.getByLabelText("Access?");
    const comments = screen.getByLabelText("Comments...");
    // const sub = screen.getByLabelText("Submit");

    userEvent.type(lat, "hello");
    await waitFor(() => expect(lat.textContent).toBe("hello"));
    userEvent.type(long, "diss");
    await waitFor(() => expect(long.textContent).toBe("diss"));
    // userEvent.type(access, "public");
    // await waitFor(() => expect(access.textContent).toBe("public"));
    userEvent.type(comments, "asdfgh");
    await waitFor(() => expect(comments.textContent).toBe("asdfgh"));

    // userEvent.click(sub);
  });
});
