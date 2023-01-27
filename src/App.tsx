import FilterBar from "./Components/FilterBar/FilterBar";
import FilterBarMobile from "./Components/FilterBarMobile/FilterBarMobile";
import Searchbar from "./Components/Searchbar/Searchbar";
import SearchbarMobile from "./Components/Searchbar_mobile/SearchbarMobile";
import VideoList from "./Components/VideoList/VideoList";
import AppProvider from "./ContextApi/AppContext";
import { ViewPortProvider } from "./ContextApi/ViewPortContext";

function App() {
  return (
    <AppProvider>
      <ViewPortProvider>
        <Searchbar />
        <SearchbarMobile />
        <FilterBar />
        <FilterBarMobile />
      </ViewPortProvider>
      <VideoList />
    </AppProvider>
  );
}

export default App;
