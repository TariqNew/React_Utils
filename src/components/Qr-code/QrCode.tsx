import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCode() {
  const [input, setInputValue] = useState<string>("");
  const [qrcode, setQrcodeValue] = useState<string>("");

  function handleGenerate() {
    setQrcodeValue(input.trim());
    setInputValue("");
  }

  return (
    <div className="flex flex-col items-center my-10 px-4 w-full max-w-md mx-auto">
      <h1 className="font-bold text-xl mb-4">QR Code Generator</h1>

      <div className="flex w-full mb-4">
        <label htmlFor="qr-input" className="sr-only">QR Code Text</label>
        <input
          id="qr-input"
          className="border border-gray-300 p-2 flex-grow rounded-l-md"
          type="text"
          placeholder="Enter the value"
          value={input}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md disabled:bg-gray-300"
          disabled={!input.trim()}
          onClick={handleGenerate}
        >
          Generate
        </button>
      </div>

      {qrcode && (
        <div className="mt-4 p-4 border border-gray-300 rounded-md bg-white">
          <QRCode id="qr-code-value" value={qrcode} />
        </div>
      )}
    </div>
  );
}
