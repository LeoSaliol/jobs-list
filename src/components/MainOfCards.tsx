import CardFilterts from './CardFilterts';
import ListOfCards from './ListOfCards';
import { useState } from 'react';
const MainOfCards = () => {
    const [filtersActived] = useState(true);
    return (
        <>
            {filtersActived && <CardFilterts />}

            <main
                className={`mx-10 mb-16 mt-28 flex flex-col gap-14 lg:mx-32 ${
                    filtersActived ? 'mt-25' : 'mt-12'
                } `}
            >
                <ListOfCards />
            </main>
        </>
    );
};
export default MainOfCards;
