const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('irodori_A2_2.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('extracted_A2_2.txt', data.text);
    console.log("Written to extracted_A2_2.txt");
});
