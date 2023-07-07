import { useState } from 'react';
import Badge from './Badge';

const Card = () => {
    const [select, setSelect] = useState(false);

    const handleSelect = () => {
        setSelect(!select);
    };
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
                        src="../src/images/photosnap.svg"
                        alt="Imagen del Logo"
                    />
                </figure>

                <div>
                    <div className="mt-6  flex w-full items-center gap-8 lg:mt-0  ">
                        <p className="text-[1.02em] font-bold text-primaryCyan lg:pb-1">
                            Photosnap
                        </p>

                        <div className="flex gap-2 text-[0.9em]">
                            <p className="rounded-[45px] bg-primaryCyan px-[10px] py-[4px] font-bold text-bgWhite">
                                NEW!
                            </p>
                            <p className="rounded-[45px] bg-darkCyan px-[11px] py-[4px] font-bold text-bgWhite">
                                FEATURED
                            </p>
                        </div>
                    </div>
                    <h1 className="my-4  text-[1.05em] font-bold lg:my-2 ">
                        Senior Frontend Developer
                    </h1>
                    <div className="flex gap-3 font-semibold text-secondaryCyan">
                        <p>1d ago</p>
                        <span>•</span>

                        <p>Full Time</p>
                        <span>•</span>
                        <p>USA only</p>
                    </div>
                </div>
            </div>
            <span className="my-4 flex h-[1px] w-full bg-secondaryCyan lg:hidden"></span>
            <div className="flex gap-5 pb-2 lg:ml-auto">
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
    );
};
export default Card;
