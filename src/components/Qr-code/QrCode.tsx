import { useState } from "react";
import QRCode from "react-qr-code";


export default function QrCode(){

  const [input, setInputValue] = useState<string>('')
  const [qrcode, setQrcodeValue] = useState<string>('')

  function handleGenerate() {
    setQrcodeValue(input)
    setInputValue('')
  }

  return (
    <div className="flex items-center flex-col my-10">
      <div className="font-bold text-xl mb-3">
        <h1>QR Code Generator</h1>
      </div>
  
      <div className="flex mb-2">
        <input
          className="border border-gray-300 p-2 rounded-l-md"
          type="text"
          placeholder="Enter the value"
          value={input}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md disabled:bg-gray-300"
          disabled={!input.trim()} // only disables when input is empty
          onClick={handleGenerate}
        >
          Generate
        </button>
      </div>
  
      <div>
        <QRCode id="qr-code-value" value={qrcode} />
      </div>
    </div>
  );  
}