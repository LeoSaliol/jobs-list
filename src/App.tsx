import MainOfCards from './components/MainOfCards';
import { FiltersContextProvider } from './context/filtersContext';
import imgDesktop from './images/bg-header-desktop.svg';
import imgMobile from './images/bg-header-mobile.svg';

function App() {
    return (
        <FiltersContextProvider>
            <figure
                className="h-[180px] bg-primaryCyan bg-cover  bg-no-repeat lg:hidden "
                style={{
                    backgroundImage: `url("${imgMobile}")`,
                }}
            ></figure>
            <figure
                className="hidden h-[150px] bg-primaryCyan bg-cover bg-no-repeat  lg:block"
                style={{
                    backgroundImage: `url("${imgDesktop}")`,
                }}
            ></figure>
            <MainOfCards />
        </FiltersContextProvider>
    );
}

export default App;
