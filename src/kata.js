function App(root) {
  var rootSelector = root;

  function performSearch() {
    var result = _.template("<h1>搜索结果</h1><ul class='result'><li class='item'>结果1</li><li class='item'>结果2</li></ul>");
    $(result()).appendTo(rootSelector);
    $(rootSelector + " ul.result .item").on('click', performCollect)
  }

  function performCollect(event) {
    var favorite = _.template("<h1>收藏夹</h1><ul class='favorite'></ul>");
    if ($(rootSelector + ' .favorite').length == 0) $(favorite()).appendTo(rootSelector);
    $(event.target).appendTo(rootSelector + " .favorite");
  }

  return {
    index: function () {
      $(rootSelector).empty();
      var panel = _.template("<div class='panel'>panel</div><input class='search-text' type='text'><input class='search' type='submit'>");
      $(panel()).appendTo(rootSelector);
      $(rootSelector + " .search").on('click', performSearch)

    }
  };
}
