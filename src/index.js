const DomNodeCollection = require ('./dom_node_collection.js');

function $l (arg) {
  let rest = [];

  const elements = document.querySelectorAll(arg);

  elements.forEach((el) => {
    if (el instanceof HTMLElement) {
      rest.push(el);
    }
  });

  return new DomNodeCollection(rest);
}


window.$l = $l;
