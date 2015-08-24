describe("App", function () {
  it("can render a page", function () {
    var app = new App();
    expect($(app.index())).toContainElement('body');
  });
});
