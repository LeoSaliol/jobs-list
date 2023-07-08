import { useFiltersContext } from '../context/useFiltersContext';
import RemoveIcon from '../icons/RemoveIcon';
import Badge from './Badge';

const CardFilterts = () => {
    const { deleteFilter, filterActived, deleteAllFilter } =
        useFiltersContext();

    return (
        <>
            {filterActived.length > 0 && (
                <header className="absolute top-[110px] w-full px-10 lg:px-32 ">
                    <article className="    flex  w-full justify-between rounded-lg bg-bgWhite shadow-3xl  shadow-cyan-900   ">
                        <div className="flex w-[100%] flex-wrap gap-6 p-6 ">
                            {filterActived.map((t) => (
                                <div
                                    key={t}
                                    className="flex h-[35px] items-center justify-between    overflow-hidden   rounded-lg bg-bgBadge"
                                >
                                    <Badge tecnology={t} />
                                    <div
                                        className="flex h-full cursor-pointer  items-center justify-center bg-primaryCyan "
                                        onClick={() => deleteFilter(t)}
                                    >
                                        <RemoveIcon
                                            width={25}
                                            height={23}
                                            fill="hsl(180, 31%, 95%)"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            className="w-[25%] text-start text-[1.3em] font-bold tracking-wide text-secondaryCyan md:text-center "
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

// {
//     TENCOLOGIAS.map((t) => (
//         <div
//             key={t}
//             className="flex h-[35px] items-center justify-between   gap-2  overflow-hidden rounded-lg bg-bgBadge"
//         >
//             <p className="mx-2 text-[1.1em] font-bold text-primaryCyan">{t}</p>
//             <div className="flex h-full cursor-pointer  items-center justify-center bg-primaryCyan">
//                 <RemoveIcon
//                     width={25}
//                     height={25}
//                     fill="hsl(180, 31%, 95%)"
//                 />
//             </div>
//         </div>
//     ));
// }
