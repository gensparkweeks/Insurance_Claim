import React from 'react';
import { useParams } from 'react-router-dom';
import Global from './Global';
import DocViewer from 'react-doc-viewer'


const PdfViewer = () => {
    const {uploadPath} = Global;
    const {file} = useParams();

    const pdfFile = uploadPath + file;
    const docs = [
        {uri: 'http://localhost:8080/resources/files/INSURANCE 1.pdf'}
    ];

    return (
            <DocViewer documents={docs} />
            // <h1>{pdfFile}</h1>
    );
}

export default PdfViewer;
