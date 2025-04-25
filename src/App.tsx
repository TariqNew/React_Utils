import Accordian from "./components/accordian/Accordian";
import LoadData from "./components/Load_Data/LoadData";
import Slider from "./components/imageSlider/Slider";

export default function App(){
  return (
    <div>
      <Accordian />
      <Slider url="https://picsum.photos/v2/list" limit = {5} />
      <LoadData urlData="https://www.themealdb.com/api/json/v1/1/search.php?s=" />

    </div>
  )
}