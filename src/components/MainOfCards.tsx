import { useFiltersContext } from '../context/useFiltersContext';
import CardFilterts from './CardFilterts';
import ListOfCards from './ListOfCards';

const MainOfCards = () => {
    const { filterActived } = useFiltersContext();

    return (
        <>
            {filterActived.length > 0 && <CardFilterts />}

            <main
                className={`mx-10 mb-16  flex flex-col gap-14 lg:mx-32 ${
                    filterActived.length > 0 ? 'mt-24' : 'mt-12'
                } `}
            >
                <ListOfCards />
            </main>
        </>
    );
};
export default MainOfCards;
