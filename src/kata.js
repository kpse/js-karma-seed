function App(root) {
  var rootSelector = root;
  return {
    index: function () {
      var panel = _.template("<div class='panel'>panel</div>");
      $(panel()).appendTo(rootSelector);
    }
  };
}
