export type Category ={
    [tag:string]:{
        title: string,
        color:string,
        expense:boolean, // saber se é despesa
    }
}