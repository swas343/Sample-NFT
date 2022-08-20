const pdf2base64 = require("pdf-to-base64");
pdf2base64("assets/sample.pdf")
  .then((response) => {
    console.log(response); //cGF0aC90by9maWxlLmpwZw==
    return response;
  })
  .catch((error) => {
    console.log(error); //Exepection error....
  });
