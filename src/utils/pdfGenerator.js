import latex from 'node-latex';


// export const compileLatexToPDF = (latexCode, callback) => {
//   const input = fs.createReadStream(latexCode);
//   const output = fs.createWriteStream('output.pdf');
//   const pdf = latex(input);

//   pdf.pipe(output);
//   pdf.on('error', (err) => callback(err, null));
//   pdf.on('finish', () => callback(null, 'output.pdf'));
// };
const compileToPDF = async (latexCode) => {
  const response = await fetch('/api/compileLatex', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ latexCode }),
  });

  if (response.ok) {
    const pdfBlob = await response.blob();
    const url = URL.createObjectURL(pdfBlob);
    // Use the PDF URL (e.g., open in a new tab, download, etc.)
  } else {
    console.error('An error occurred while compiling the LaTeX code');
  }
};
export default compileToPDF;
