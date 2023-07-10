import BgFigures from './components/BgFigures';
import Footer from './components/Footer';
import MainOfCards from './components/MainOfCards';
import { FiltersContextProvider } from './context/filtersContext';

function App() {
    return (
        <FiltersContextProvider>
            <BgFigures />
            <MainOfCards />
            <Footer />
        </FiltersContextProvider>
    );
}

export default App;
