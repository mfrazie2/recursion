// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
//Need storage
  var nodes = [];
  //Pass in a node
  var searchNodes = function(node){
    //Check if passed in node has className
    if (node.className === className){
      nodes.push(node);
    }
  };

  //Pass in children nodes
    //Check if passed in children node has classname



};
