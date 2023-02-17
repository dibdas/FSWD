const countingUl = document.getElementById("counting");
const countingUlChildren = countingUl.childNodes;
console.log(countingUlChildren);

const countingUlk = document.getElementById("countinglk");
const countingUlkChildren = countingUlk.childNodes;
console.log(countingUlkChildren);

const ulkParent = countingUlk.parentNode;
// console.log(ulkParent)
console.log(countingUl.parentElement);

const oneLi = document.getElementById("oneLi");
console.log(oneLi.parentNode.children);
console.log(oneLi.parentNode.childNodes);

const twoLi = document.getElementById("twoLi");
console.log(twoLi.parentNode.children);
console.log(twoLi.parentNode.childNodes);
console.log(twoLi.nextSibling);

const heading = document.getElementById("heading");
console.log(heading.nextSibling);
console.log(heading.lastElementChild);
console.log(heading.lastChild.nodeValue);
console.log(heading.firstChild.nodeValue);
console.log((heading.innerHTML = `<h2>Hello Changed</h2>`));

for (let i = 0; i < twoLi.parentNode.childNodes.length; i++) {
  console.log(twoLi.parentNode.childNodes[i].data);
}

console.log(document.documentElement);
// console.log(document.body);
