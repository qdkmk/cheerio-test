let client = require('cheerio-httpcli');

//download
//let url = "http://www.aozora.gr.jp/index_pages/person81.html";
let url = "http://webcatplus.nii.ac.jp/webcatplus/details/book/isbn/9784766108958.html"
let param ={};
let result = [];
let result2 = [];
client.fetch(url, param, function(err, $, res){
  //check error
   if(err){console.log("Error:", err);return;}
   //display html
   //let body = $.html();
   //console.log(body);

   //display link
   //$("a").each(function(idx){
    // let text = $(this).text();
     //let href = $(this).attr('href');
     //console.log(text+":"+href);
   //});

   //desplay link webcat
   $("td.mcl-mainPart .wcp-sElements-002 div.table-C td").each(function(idx){
      let text = $(this).text();
      //let href = $(this).attr('href');
      //let text = $(this).contents();
      result.push(text);
      console.log("text=" + text);
    });
console.log("<result>");
console.log("書名:"+result[0]);
//console.log("著者:"+result[1]);
//console.log("出版元:"+result[4]);
//console.log("刊行年月:"+result[5]);

$("td.mcl-mainPart div.wcp-sElements-001 td.set-Info ul.ul-A li").each(function(idx){
   let text2 = $(this).text();
   //let href = $(this).attr('href');
   //let text = $(this).contents();
   result2.push(text2);

 });
 console.log("<result2>");
 console.log("result2"+result2);
});
