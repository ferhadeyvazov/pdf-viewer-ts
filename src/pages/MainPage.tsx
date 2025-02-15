import React, { useState } from 'react'
import MainLayout from '../layouts'
import PdfComp from '../components/pdf/PdfComp';

const MainPage: React.FC = () => {
  const [pdfUrl, setPdfUrl] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file) {
        const fileUrl = URL.createObjectURL(file);
        setPdfUrl(fileUrl);
      }
    }
  }

  return (
    <MainLayout>
      <form>
        <input
          className='bg-blue-500 p-2 rounded-md hover:opacity-50 hover:cursor-pointer'
          type="file" name="file" id="fileUrl"
          accept='application/pdf'
          onChange={handleChange} />
      </form>
      <PdfComp urlPdf={pdfUrl} />
    </MainLayout>
  )
}

export default MainPage