import Badge from './components/Badge';
import CardFilterts from './components/CardFilterts';

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
            <CardFilterts />
            <main className="mx-10 mt-28 rounded-lg border-s-8 border-primaryCyan ">
                <article className="px-6">
                    <img
                        src="../src/images/photosnap.svg"
                        alt="Imagen del Logo"
                    />
                    <div>
                        <p>Photosnap</p>
                        <div>
                            <p>NEW!</p>
                            <p>FEATURED</p>
                        </div>
                    </div>
                    <h1>Senior Frontend Developer</h1>
                    <div>
                        <p>1d ago</p>
                        <p>Full Time</p>
                        <p>USA only</p>
                    </div>
                    <hr />
                    <div className="flex gap-5">
                        <button className="overflow-hidden rounded-lg">
                            <Badge tecnology="Frontend" />
                        </button>
                        <button className="overflow-hidden rounded-lg">
                            <Badge tecnology="CSS" />
                        </button>
                        <button className="overflow-hidden rounded-lg">
                            <Badge tecnology="Junior" />
                        </button>
                    </div>
                </article>
            </main>
        </>
    );
}

export default App;
