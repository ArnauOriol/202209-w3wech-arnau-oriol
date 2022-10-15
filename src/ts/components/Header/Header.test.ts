import Header from "./Header";

describe("Given the Header component", () => {
  describe("When its rendered with 'Bazinga'", () => {
    test("Then it should show a heading of level 1 with 'Bazinga'", () => {
      const screen = document.createElement("div");
      const title = "Bazinga";
      const tag = "h1";

      const header = new Header(screen, title);
      header.render();
      const heading = screen.querySelector(tag);

      expect(heading).not.toBeNull();
      expect(heading.textContent).toBe(title);
    });
  });
});
