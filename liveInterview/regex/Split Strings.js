/*

 url = "http://github.com/carbonfive/raygun" -> domain name = "github"
 url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
 url = "https://www.cnet.com"                -> domain name = cnet"

 */

//  let url = "http://github.com/carbonfive/raygun";
// let url2 = "http://www.zombie-bites.com"
//  console.log(
//    url2.match(/\/\/^(www)(\w*)/)
//  );


// console.log(
//   'Jeffs'.replace(/(?<=Jeff)(?=s)/, "'")
// );
// console.log(
//   '123456'.replace(/(?<=\d)(?=\d)/g, ',')
// );



function domainName(url){
  return /(?:http(?:s)?:\/\/)?(?:www\.)?([^\.]*)/.exec(url)
}

console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("https://www.cnet.com"));
console.log(domainName("http://github.com/carbonfive/raygun"));