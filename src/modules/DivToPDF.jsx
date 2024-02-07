import {usePDF} from 'react-to-pdf';
import generatePDF, {Margin} from 'react-to-pdf';
import React from 'react';

const DivToPDF = ({contentToConvert, fileName}) => {

  const {toPDF, targetRef} = usePDF({filename: fileName, page: { format: 'letter'},});

  //show content, download, then hide
  function handleDownload(e) {
    console.log(e.target);
    console.log("this is contentToConvert: ", contentToConvert);
    e.target.nextSibling.classList.remove('hide');
    toPDF();
    e.target.nextSibling.classList.add('hide');
  }

  return (
    <div>
      <button className='btn downloadBtn' onClick={(e) => handleDownload(e)}>Download PDF</button>
      <div ref={targetRef} className='hide'>
        {contentToConvert()}
      </div>
    </div>
  )
}

export default DivToPDF;