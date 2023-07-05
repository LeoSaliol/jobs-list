import RemoveIcon from '../icons/RemoveIcon';
import Badge from './Badge';

const TENCOLOGIAS = ['Frontend', 'CSS', 'JavaScript'];

const CardFilterts = () => {
    return (
        <header className=" w-full">
            <article className="absolute top-[110px] mx-10 flex w-[80%] justify-between rounded-lg bg-bgCard shadow-2xl  shadow-cyan-900 lg:mx-16  xl:w-[90%]">
                <div className="flex w-[100%] flex-wrap gap-6 p-6 ">
                    {TENCOLOGIAS.map((t) => (
                        <div
                            key={t}
                            className="flex h-[35px] items-center justify-between    overflow-hidden   rounded-lg bg-bgBadge"
                        >
                            <Badge tecnology={t} />
                            <div className="flex h-full cursor-pointer  items-center justify-center bg-primaryCyan ">
                                <RemoveIcon
                                    width={25}
                                    height={23}
                                    fill="hsl(180, 31%, 95%)"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <button className="w-[25%] text-start text-[1.3em] font-bold tracking-wide text-secondaryCyan md:text-center ">
                    Clear
                </button>
            </article>
        </header>
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
