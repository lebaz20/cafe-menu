describe("Add menu item", () => {
  const uniqueName = `Special dish${new Date().getTime()}`;
  const uniquePrice = `11.9${Math.floor(Math.random() * 10)}`;
  const types = ["Side", "Main Course", "Dessert"];
  const uniqueType = types[Math.floor(Math.random() * types.length)];
  it("Should fill form as expected", () => {
    cy.visit("/new");
    cy.get("#type")
      .select(uniqueType)
      .invoke("val")
      .should("deep.equal", uniqueType);
    cy.get("#name")
      .type(uniqueName)
      .invoke("val")
      .should("deep.equal", uniqueName);
    cy.get("#price")
      .type(uniquePrice)
      .invoke("val")
      .should("deep.equal", uniquePrice);
    cy.fixture("test.jpeg").then((fileContent) => {
      cy.get('input[type="file"]').attachFile({
        fileContent: fileContent.toString(),
        fileName: `${uniqueName}.jpeg`,
        mimeType: "image/jpg",
      });
      cy.get("div.deleteImage").should("be.visible");
    });
    cy.get("form").submit().wait(5000);
  });
  it("Should display success message", () => {
    cy.get("div.alert-success")
      .should("be.visible")
      .should("have", "saved successfully");
  });
  it("Should be displayed in menu list", () => {
    cy.visit("/").wait(5000);
    cy.get("div.card-title").should("be.visible").should("contain", uniqueName);
    cy.get("div.card-title")
      .should("be.visible")
      .should("contain", `$${uniquePrice}`);
  });
});
