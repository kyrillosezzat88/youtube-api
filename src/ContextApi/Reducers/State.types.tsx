export type StateProps = {
    videos:{
        videoId:string
    }[],
    isLoading:Boolean,
    isError:Boolean,
    pageInfo:{
        totalResults:number,
        resultsPerPage:number
    },
}