export type ActionsProps = {
    type:string,
    payload:{
        items:any,
        pageInfo:{
            totalResults:number,
            resultsPerPage:number
        }
    }
}