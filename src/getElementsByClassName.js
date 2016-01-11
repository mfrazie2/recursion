// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
    //matched nodes storage
    var nodes = [];
    node = node || document.body;

    //Compare node classname to className
    var parts = node.className.split(' ');
    if (parts.indexOf(className) >= 0) {
        //If matched, push to nodes array
        nodes.push(node);
        console.log(nodes);
    }

    //Iterate over children nodes
    for (var i = 0; i < node.children.length; i++) {
        //Check if passed in children node has classname
       var results = getElementsByClassName(className, node.children[i]);
       nodes = nodes.concat(results);
    }


    return nodes;

};
