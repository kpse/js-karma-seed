describe("App", function () {
  it("can render a page", function () {
    var fixture = setFixtures('<div id="app"></div>')
    var app = new App('#app');

    app.index();

    expect(fixture.find('#app')).toContainElement('.panel')
  });
});
