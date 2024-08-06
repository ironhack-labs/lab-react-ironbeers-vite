import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AllBeersPage from "../pages/AllBeersPage";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

const beersData = [
  {
    _id: "a1",
    name: "Beer 1",
    tagline: "Tagline 1",
    contributed_by: "Contributor 1",
    image_url: "https://image1.jpg",
  },
  {
    _id: "a2",
    name: "Beer 2",
    tagline: "Tagline 2",
    contributed_by: "Contributor 2",
    image_url: "https://image2.jpg",
  },
];

mock.onGet("https://ih-beers-api2.herokuapp.com/beers").reply(200, beersData);

test("renders a list of all beers and their details from the Beers API", async () => {
  render(
    <BrowserRouter>
      <AllBeersPage />
    </BrowserRouter>
  );

  const beer1Name = await screen.findByText("Beer 1");
  const beer1Tagline = await screen.findByText("Tagline 1");
  const beer1Contributor = await screen.findByText((content, element) =>
    content.includes("Contributor 1")
  );
  const beer1DetailsLink = await screen.findByTestId("details-link-a1");

  expect(beer1Name).toBeInTheDocument();
  expect(beer1Tagline).toBeInTheDocument();
  expect(beer1Contributor).toBeInTheDocument();
  expect(beer1DetailsLink).toHaveAttribute("href", "/beers/a1");

  const beer2Name = await screen.findByText("Beer 2");
  const beer2Tagline = await screen.findByText("Tagline 2");
  const beer2Contributor = await screen.findByText((content, element) =>
    content.includes("Contributor 2")
  );
  const beer2DetailsLink = await screen.findByTestId("details-link-a2");

  expect(beer2Name).toBeInTheDocument();
  expect(beer2Tagline).toBeInTheDocument();
  expect(beer2Contributor).toBeInTheDocument();
  expect(beer2DetailsLink).toHaveAttribute("href", "/beers/a2");
});
