function App(root) {
  var rootSelector = root;
  function performSearch() {
    var result = _.template("<ul class='result'><li class='item'>结果1</li><li class='item'>结果2</li></ul>");
    $(result()).appendTo(rootSelector);
    $(rootSelector + " ul.result .item").on('click', performCollect)
  };
  function performCollect(event) {
    var favorite = _.template("<ul class='favorite'></ul>");
    $(favorite()).appendTo(rootSelector);
    $(event.target).addClass('like').appendTo(rootSelector + " .favorite");
  };
  return {
    search: performSearch,
    index: function () {
      $(rootSelector).empty();
      var panel = _.template("<div class='panel'>panel</div><input class='search-text' type='text'><input class='search' type='submit'>");
      $(panel()).appendTo(rootSelector);
      $(rootSelector + " .search").on('click', performSearch)

    }
  };
}
