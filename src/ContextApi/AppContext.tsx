import React, { createContext, useReducer } from 'react'
import { AppProps } from './AppContext.types'
import { AppReducer } from './Reducers/AppReducer'

type InitState = {
    videos: {
        videoId: string
    }[],
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    },
    isLoading: Boolean,
    isError: Boolean,
}

const initState = {
    videos: [],
    isLoading: false,
    isError: false,
    pageInfo: {
        totalResults: 0,
        resultsPerPage: 0
    }
}

export const AppContext = createContext<{
    state: InitState;
    dispatch: React.Dispatch<any>;
}>({
    state: initState,
    dispatch: () => null
})

function AppProvider({ children }: AppProps) {
    const [state, dispatch] = useReducer(AppReducer, initState);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider