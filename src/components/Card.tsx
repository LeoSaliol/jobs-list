import { useState } from 'react';
import Badge from './Badge';
import { Vacancy } from '../interface/Vacancy';
import { useFiltersContext } from '../context/useFiltersContext';

interface Props {
    vacancy: Vacancy;
}

const Card = ({ vacancy }: Props) => {
    const [select, setSelect] = useState(false);
    const [selectBagde, setSelectBagde] = useState(false);

    const { addFilter } = useFiltersContext();
    const handleSelect = () => {
        setSelect(!select);
    };
    const badges = [
        vacancy.role,
        vacancy.level,
        ...vacancy.languages,
        ...vacancy.tools,
    ];
    return (
        <article
            className={` relative z-0 w-full cursor-pointer rounded-lg ${
                select ? ' border-s-8 border-primaryCyan' : ''
            }  px-6 py-4 shadow-4xl lg:flex `}
            onClick={handleSelect}
        >
            <div className="lg:flex lg:items-center">
                <figure className="absolute top-[-10%] z-10 w-[50px] lg:static lg:w-[110px]">
                    <img
                        src={vacancy.logo}
                        alt="Imagen del Logo"
                    />
                </figure>

                <div>
                    <div className="mt-6  flex w-full items-center gap-8 lg:mt-0  ">
                        <p className="text-[1.02em] font-bold text-primaryCyan lg:pb-1">
                            {vacancy.company}
                        </p>

                        <div className="flex gap-2 text-[0.9em]">
                            {vacancy.new && (
                                <p className="rounded-[45px] bg-primaryCyan px-[10px] py-[4px] font-bold text-bgWhite">
                                    NEW!
                                </p>
                            )}
                            {vacancy.featured && (
                                <p className="rounded-[45px] bg-darkCyan px-[11px] py-[4px] font-bold text-bgWhite">
                                    FEATURED
                                </p>
                            )}
                        </div>
                    </div>
                    <h1 className="my-4  text-[1.05em] font-bold lg:my-2 ">
                        {vacancy.position}
                    </h1>
                    <div className="flex gap-3 font-semibold text-secondaryCyan">
                        <p>{vacancy.postedAt}</p>
                        <span>•</span>

                        <p>{vacancy.contract}</p>
                        <span>•</span>
                        <p>{vacancy.location}</p>
                    </div>
                </div>
            </div>
            <span className="my-4 flex h-[1px] w-full bg-secondaryCyan lg:hidden"></span>
            <div className="flex flex-wrap gap-3  pb-2 lg:ml-auto">
                {badges.map((p) => (
                    <button
                        key={p.toString()}
                        className="overflow-hidden "
                        onClick={(e) => {
                            e.stopPropagation();
                            addFilter(p);
                        }}
                    >
                        <Badge tecnology={p.toString()} />
                    </button>
                ))}
            </div>
        </article>
    );
};
export default Card;
