import { useEffect, useState } from "react";

interface urlProp {
    urlData: string;
}

interface urlValues {
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
}

export default function LoadData({ urlData }: urlProp) {
    const [images, setImagesValues] = useState<urlValues[]>([]);
    const [error, setError] = useState<string | null>(null);

    async function fetchData(urlParam: string) {
        try {
            const response = await fetch(urlParam);
            const data = await response.json();

            if (data && data.meals) {
                setImagesValues(data.meals);
            }
        } catch (e: any) {
            setError(e.message);
        }
    }

    useEffect(() => {
        if (urlData) {
            fetchData(urlData);
        }
    }, [urlData]);

    if (error) {
        return <div>Error occurred: {error}</div>;
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {images.map((imageItem, index) => (
                <div
                    key={index}
                    className="rounded shadow overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 bg-white"
                >
                    <img
                        src={imageItem.strMealThumb}
                        alt={imageItem.strMeal}
                        className="w-full h-40 object-cover"
                    />
                    <p className="text-center mt-2 font-semibold text-gray-700 px-2 pb-3">
                        {imageItem.strMeal}
                    </p>
                </div>
            ))}
        </div>

    );
}
