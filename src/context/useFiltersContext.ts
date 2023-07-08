import { useContext } from 'react';
import Context from './filtersContext';

export const useFiltersContext = () => {
    const context = useContext(Context);
    if (!context)
        throw new Error(
            'useFiltersContext must be used within a FiltersContextProvider'
        );
    return context;
};
