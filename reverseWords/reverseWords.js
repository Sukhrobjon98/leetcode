function reverseWords(s) {
  let str = s.split(" ").filter(iteam=>iteam!="").reverse().join(" ")
  return str;
}

let str = "a good   example";
console.log(reverseWords(str));
