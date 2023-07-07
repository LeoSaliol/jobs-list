import CardFilterts from './components/CardFilterts';
import ListOfCards from './components/ListOfCards';
import MainOfCards from './components/MainOfCards';

function App() {
    return (
        <>
            <div
                className="h-[180px] bg-primaryCyan bg-cover  bg-no-repeat lg:hidden "
                style={{
                    backgroundImage: `url("../src/images/bg-header-mobile.svg")`,
                }}
            ></div>
            <div
                className="hidden h-[150px] bg-primaryCyan bg-cover bg-no-repeat  lg:block"
                style={{
                    backgroundImage: `url("../src/images/bg-header-desktop.svg")`,
                }}
            ></div>
            <MainOfCards />
        </>
    );
}

export default App;
