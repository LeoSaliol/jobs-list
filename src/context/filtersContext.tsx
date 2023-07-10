import { createContext, useState, useEffect } from 'react';

import { BagdeType } from '../interface/Bagde';

import { Vacancy, vacancys } from '../interface/Vacancy';

interface Props {
    children: React.ReactNode;
}

type ContextProps = {
    jobs: Vacancy[];
    filterJobs: Vacancy[];
    filterActived: BagdeType[];
    selectBagde: string[];
    setSelectBagde: React.Dispatch<React.SetStateAction<string[]>>;
    setFilterActived: React.Dispatch<React.SetStateAction<BagdeType[]>>;
    addFilter: (badge: BagdeType) => void;
    deleteFilter: (badge: BagdeType) => void;
    deleteAllFilter: () => void;
};

const Context = createContext<ContextProps | undefined>(undefined);

export function FiltersContextProvider({ children }: Props) {
    const [filterActived, setFilterActived] = useState<BagdeType[]>([]);
    const [jobs] = useState<Vacancy[]>(vacancys);
    const [filterJobs, setFilterJobs] = useState(jobs);

    const [selectBagde, setSelectBagde] = useState<string[]>([]);

    useEffect(() => {
        if (filterActived.length === 0) {
            setFilterJobs(jobs);
            setSelectBagde([...filterActived]);
        } else {
            const filter = jobs.filter((job) => {
                const badges = [
                    job.role,
                    job.level,
                    ...job.languages,
                    ...job.tools,
                ];
                return filterActived.every((f) => badges.includes(f));
            });

            setSelectBagde([...filterActived]);
            setFilterJobs(filter);
        }
    }, [filterActived, jobs]);

    const addFilter = (badge: BagdeType) => {
        const existFilter = filterActived.find((f) => f === badge);
        if (!existFilter) {
            setFilterActived([...filterActived, badge]);
        }
    };
    const deleteFilter = (badge: BagdeType) => {
        setFilterActived(filterActived.filter((f) => f !== badge));
    };
    const deleteAllFilter = () => {
        setFilterActived([]);
    };
    const value = {
        jobs,
        filterJobs,
        filterActived,
        setFilterActived,
        addFilter,
        deleteFilter,
        deleteAllFilter,
        selectBagde,
        setSelectBagde,
    };
    return <Context.Provider value={value}>{children}</Context.Provider>;
}
export default Context;
