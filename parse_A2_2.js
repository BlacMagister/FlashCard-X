import fs from 'fs';
import PDFParser from 'pdf2json';

const pdfParser = new PDFParser(this, 1);
pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFileSync('extracted_A2_2.txt', pdfParser.getRawTextContent());
    console.log("Written to extracted_A2_2.txt");
});
pdfParser.loadPDF("irodori_A2_2.pdf");
