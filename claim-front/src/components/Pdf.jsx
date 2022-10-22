import React from 'react';
import { useParams } from 'react-router-dom';
import Global from './Global';

const Pdf = () => {

    const {uploadPath} = Global;
    const {file} = useParams();

    const pdfFile = uploadPath + file;
    const url = 'https://view.officeapps.live.com/op/embed.aspx?src='+{pdfFile}

    //Check extension
    const index = file.indexOf('.');
    const ext = file.substr(index + 1);

    if(ext==="docx" || ext==="doc"){
        return (
            <iframe src={pdfFile}
                width='100%' height='100%' 
                frameborder='0'>This is an embedded <a target='_blank' 
                href='http://office.com'>Microsoft Office</a> document, powered by 
                <a target='_blank' href='http://office.com/webapps'>Office Online</a>
            </iframe>
        );

    }else{
        return (
            <object className='pdf'
                data={pdfFile}
                type='application/pdf'
                width='100%'
                height='100%'
            >
            </object>
        );
    }
    
}

export default Pdf;
