import { create } from 'zustand'

export const useAppStore = create((set) => ({
    
    isNavbarHidden: true,
    setIsNavbarHidden: (isNavbarHidden) => set({ isNavbarHidden }),

    filtersQuery: [],
    addFilterQuery: (filtersQuery, filterQuery) => {
        filtersQuery.push(filterQuery)
        // console.log("From app store:", filtersQuery)
        set({ filtersQuery })
    },
    removeFilterQuery: (filterQuery, filtersQuery) => {
        const newFiltersQuery = filtersQuery.filter(filter => filter !== filterQuery)
        // console.log("From app store:", filtersQuery)
        set({
            filtersQuery: newFiltersQuery
        })
    },
    setFiltersQuery: (filtersQuery) => set({ filtersQuery })
}))