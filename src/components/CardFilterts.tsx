import { useFiltersContext } from '../context/useFiltersContext';
import RemoveIcon from '../icons/RemoveIcon';
import Badge from './Badge';

const CardFilterts: React.FC = () => {
    const { deleteFilter, filterActived, deleteAllFilter } =
        useFiltersContext();

    return (
        <>
            {filterActived.length > 0 && (
                <header className="relative top-[-70px] w-full px-10  lg:px-32  xl:top-[-45px]">
                    <article className="  flex  w-full   justify-between rounded-lg bg-bgWhite shadow-3xl     ">
                        <div className="flex w-full flex-wrap gap-6 p-6 ">
                            {filterActived.map((t) => (
                                <div
                                    key={t}
                                    className="flex h-[35px] items-center justify-between    overflow-hidden  rounded-lg bg-bgBadge text-primaryCyan"
                                >
                                    <Badge tecnology={t} />
                                    <button
                                        className="flex h-full w-[34px] items-center justify-center bg-primaryCyan hover:bg-darkCyan  "
                                        onClick={() => deleteFilter(t)}
                                    >
                                        <RemoveIcon
                                            width={25}
                                            height={23}
                                            fill="hsl(180, 31%, 95%)"
                                        />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <button
                            className="w-[25%] pr-4 text-start text-[1.3em] font-bold tracking-wide text-secondaryCyan md:pr-0 md:text-center xl:pr-7 xl:text-end "
                            onClick={() => deleteAllFilter()}
                        >
                            Clear
                        </button>
                    </article>
                </header>
            )}
        </>
    );
};
export default CardFilterts;
