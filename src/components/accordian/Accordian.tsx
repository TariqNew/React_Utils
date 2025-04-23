import { ChevronDown, ChevronUp } from 'lucide-react';
import Data from './Data';
import { useState } from 'react';

export default function Accordion() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      {Data.map((item) => (
        <div
          key={item.id}
          className={`rounded-md mb-4 shadow transition duration-300 ${
            activeId === item.id ? 'bg-sky-50 border border-sky-200' : 'bg-white border border-gray-200'
          }`}
        >
          <button
            className="w-full flex justify-between items-center px-4 py-4 text-left text-sky-600 font-semibold hover:bg-sky-100/50 rounded-t-md transition-colors duration-300"
            onClick={() => toggle(item.id)}
          >
            <span>{item.question}</span>
            {activeId === item.id ? (
              <ChevronUp className="w-5 h-5 text-sky-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-sky-400" />
            )}
          </button>

          <div
            className={`px-4 transition-all duration-500 ease-in-out overflow-hidden text-slate-600 ${
              activeId === item.id ? 'max-h-96 py-4' : 'max-h-0'
            }`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
