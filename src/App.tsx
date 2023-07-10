import BgFigures from './components/BgFigures';
import MainOfCards from './components/MainOfCards';
import { FiltersContextProvider } from './context/filtersContext';

function App() {
    return (
        <FiltersContextProvider>
            <BgFigures />
            <MainOfCards />
        </FiltersContextProvider>
    );
}

export default App;
