const name = "alex";
//Never changes

const dog = {
  name: "Alonso",
};

dog.name = "Fernando Alonso";
//YES, iti is changed

function test() {
  var num_var = 2;
  let num_let = 2;

  console.log("in the same block");
  console.log("var =" + num_var);
  console.log("let =" + num_let);
}

test();
console.log("out of the block");
console.log("var =" + num_var);
console.log("let =" + num_let);
