import { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface urlProp {
  url: string;
  limit: number;
}

interface imageItem {
  download_url: string;
  author: string;
  id: string;
}

export default function Slider({ url, limit }: urlProp) {
  const [images, setImages] = useState<imageItem[]>([]);
  const [current, setCurrent] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        setImages(data.slice(0, limit));
        setLoading(false);
      }
    } catch (e: any) {
      setErrorMessage(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [url]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  if (loading) return <div className="text-center mt-4">Please wait...</div>;
  if (errorMessage) return <div>Error: {errorMessage}</div>;
  if (!images.length) return <div>No images available.</div>;

  return (
    <div className="relative w-full max-w-xl mx-auto mt-8">
      <div className="relative rounded overflow-hidden shadow-lg">
        <img
          src={images[current].download_url}
          alt={`Image by ${images[current].author}`}
          className="w-full h-[400px] object-cover rounded transition-all duration-500"
        />
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button
            onClick={prevSlide}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
          >
            <ArrowLeft />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button
            onClick={nextSlide}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <p className="text-center mt-2 text-gray-700 italic">
        Photo by <span className="font-semibold">{images[current].author}</span>
      </p>
    </div>
  );
}
