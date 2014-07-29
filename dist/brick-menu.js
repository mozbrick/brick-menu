(function () {

  var BrickMenuElementPrototype = Object.create(HTMLElement.prototype);

  // Register the element
  window.BrickMenuElement = document.registerElement('brick-menu', {
    prototype: BrickMenuElementPrototype
  });

})();
