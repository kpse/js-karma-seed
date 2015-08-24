describe("App", function () {
  it("can render a page", function () {
    var fixture = setFixtures('<div id="app"></div>')
    var app = new App('#app');

    app.index();

    expect(fixture.find('#app')).toContainElement('.panel')
  });

  it("contains a search input", function () {
    var fixture = setFixtures('<div id="app"></div>')
    var app = new App('#app');

    app.index();

    expect(fixture.find('#app')).toContainElement('input.search')
  });

  it("should perform searching by clicking", function () {
    var fixture = setFixtures('<div id="app"></div>')
    var app = new App('#app');

    app.index();
    fixture.find('.search').click();

    expect(fixture.find('#app')).toContainElement('ul.result')
    expect(fixture.find('#app')).toContainElement('ul.result .item')
  });

  it("should not repeat the same dom", function () {
    var fixture = setFixtures('<div id="app"></div>')
    var app = new App('#app');

    app.index();
    app.index();

    expect($('.panel').length).toBe(1)
  });

  it("should be able to pin the result item down", function () {
    var fixture = setFixtures('<div id="app"></div>')
    var app = new App('#app');

    app.index();
    fixture.find('.search').click();
    $('ul.result .item:first').click();

    expect(fixture.find('.favorite')).toContainElement('.item')
  });
});
