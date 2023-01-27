import { ActionsProps } from "./Actions.types";
import { StateProps } from "./State.types";

export const AppReducer = (state:StateProps , action:ActionsProps ) => {
    switch (action.type) {
        case "SEARCH_START":
            return{
                ...state,
                isLoading:true
            }
        case "SEARCH_RESULT":
            return{
                ...state,
                isLoading:false,
                videos:action.payload.items,
                pageInfo:action.payload.pageInfo
            }
        case "SEARCH_ERROR":
            return{
                ...state,
                isLoading:false,
                isError:true,
                Error:action.payload
            }
        default:
            return state;
    }
}