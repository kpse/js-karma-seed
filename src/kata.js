function App(root) {
  var rootSelector = root;
  function performSearch() {
    var result = _.template("<ul class='result'></ul>");
    $(result()).appendTo(rootSelector);
  }
  return {
    search: performSearch,
    index: function () {
      var panel = _.template("<div class='panel'>panel</div><input class='search-text' type='text'><input class='search' type='submit'>");
      $(panel()).appendTo(rootSelector);
      $(rootSelector + " .search").on('click', performSearch())
    }
  };
}
