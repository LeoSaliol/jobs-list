import Card from './Card';
import { vacancys } from '../interface/Vacancy';

const ListOfCards = () => {
    return (
        <>
            {vacancys.map((vacancy) => (
                <div key={vacancy.id}>
                    <Card vacancy={vacancy} />
                </div>
            ))}
        </>
    );
};
export default ListOfCards;
