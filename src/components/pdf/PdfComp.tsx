import React, { useState } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { attachmentPlugin } from '@react-pdf-viewer/attachment'
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation'
import { highlightPlugin } from '@react-pdf-viewer/highlight'
// Plugin styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import '@react-pdf-viewer/attachment/lib/styles/index.css'
import '@react-pdf-viewer/page-navigation/lib/styles/index.css'
import '@react-pdf-viewer/highlight/lib/styles/index.css'
// Konva
import FreeDraw from '../draw/FreeDraw';
import Rectangle from '../recrangle/Rectangle';

type IProps = {
    urlPdf: string;
}

const PdfComp: React.FC<IProps> = ({ urlPdf }) => {
    const [tool, setTool] = useState<string>('pen');
    const [penTool, setPenTool] = useState<string>("pen");
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const attachmentPluginInstance = attachmentPlugin();
    const pageNavigationPluginInstance = pageNavigationPlugin();
    const highlightPluginInstance = highlightPlugin();
    const {
        GoToNextPageButton,
        GoToPreviousPageButton,
        CurrentPageLabel,
        NumberOfPages,
    } = pageNavigationPluginInstance;
    console.log(urlPdf);


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 p-6">
            <div className="w-full max-w-4xl p-4 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
                    PDF Viewer with Drawing
                </h1>

                {/* Tool Selection */}
                <div className="mb-6 flex justify-center gap-4">
                    <select
                        name="tool"
                        value={tool}
                        onChange={(e) => setTool(e.target.value)}
                        className="bg-indigo-100 border border-indigo-300 text-gray-900 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        >
                        <option value="pen">Pen</option>
                        <option value="rectangle">Rectangle</option>
                    </select>
                    <select
                        className="bg-indigo-400 border border-indigo-300 text-gray-900 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        value={penTool}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                            setPenTool(e.target.value);
                        }}
                        >
                        <option value="pen">Pen</option>
                        <option value="eraser">Eraser</option>
                    </select>

                </div>

                {/* PDF Viewer */}
                <div className="relative z-0 bg-white border border-gray-300 rounded-lg overflow-hidden shadow-xl mb-6">
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@4.10.38/build/pdf.worker.mjs">
                        <div className="w-full max-w-7xl h-[600px] relative z-0">
                            {urlPdf && (
                                <Viewer
                                    fileUrl={urlPdf}
                                    plugins={[
                                        highlightPluginInstance,
                                        defaultLayoutPluginInstance,
                                        attachmentPluginInstance,
                                        pageNavigationPluginInstance
                                    ]}
                                />
                            )}

                            {/* Drawing Layer */}
                            <div className="absolute z-10 top-0 left-0 w-full h-full pointer-events-none">
                                {tool === 'rectangle' && <Rectangle />}
                                {tool === 'pen' && <FreeDraw tool={penTool} />}
                            </div>
                        </div>

                        {/* Navigation Controls */}
                        <div className="mt-4 flex justify-center items-center">
                            <GoToPreviousPageButton />
                            <span className="mx-4 text-xl text-gray-700">
                                <CurrentPageLabel /> / <NumberOfPages />
                            </span>
                            <GoToNextPageButton />
                        </div>
                    </Worker>
                </div>
            </div>
        </div>

    );
}

export default PdfComp;