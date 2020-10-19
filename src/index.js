module.exports = function reverse (n) {
  let str = n.toString();
  let newNum =''; 
  for(let i=str.length-1; i > -1; i--) {
    newNum+=str.charAt(i)
  }
  console.log(newNum)
  return Number.parseInt(newNum)
}
