import { createContext, useState } from 'react';

import { BagdeType } from '../interface/Bagde';

interface Props {
    children: React.ReactNode;
}

type ContextProps = {
    filterActived: BagdeType[];
    setFilterActived: React.Dispatch<React.SetStateAction<BagdeType[]>>;
    addFilter: (badge: BagdeType) => void;
    deleteFilter: (badge: BagdeType) => void;
    deleteAllFilter: () => void;
};

const Context = createContext<ContextProps | undefined>(undefined);

export function FiltersContextProvider({ children }: Props) {
    const [filterActived, setFilterActived] = useState<BagdeType[]>([]);
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
        filterActived,
        setFilterActived,
        addFilter,
        deleteFilter,
        deleteAllFilter,
    };
    return <Context.Provider value={value}>{children}</Context.Provider>;
}
export default Context;
