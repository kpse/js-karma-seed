function App(root) {
  var rootSelector = root;
  function performSearch() {
    var result = _.template("<ul class='result'><li>结果1</li><li>结果2</li></ul>");
    $(result()).appendTo(rootSelector);
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
