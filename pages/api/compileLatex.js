const latex = require('node-latex');
const fs = require('fs');
const path = require('path');

export default async (req, res) => {
  try {
    const latexSource = req.body.latexSource;

    if (!latexSource) {
      res.status(400).json({ error: 'No LaTeX source provided.' });
      return;
    }

    const generatePDF = (source) => {
      return new Promise((resolve, reject) => {
        const outputFilePath = path.join(__dirname, 'output.pdf');
        const writeStream = fs.createWriteStream(outputFilePath);
        const pdfStream = latex(source);

        pdfStream.on('error', reject);
        pdfStream.pipe(writeStream).on('finish', () => resolve(outputFilePath));
      });
    };

    const pdfPath = await generatePDF(latexSource);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=output.pdf');
    fs.createReadStream(pdfPath).pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while generating the PDF.' });
  }
};
