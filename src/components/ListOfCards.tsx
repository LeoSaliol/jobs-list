import Card from './Card';

import { useFiltersContext } from '../context/useFiltersContext';

const ListOfCards = () => {
    const { filterJobs } = useFiltersContext();

    return (
        <>
            {filterJobs.map((vacancy) => (
                <div key={vacancy.id}>
                    <Card vacancy={vacancy} />
                </div>
            ))}
        </>
    );
};
export default ListOfCards;
