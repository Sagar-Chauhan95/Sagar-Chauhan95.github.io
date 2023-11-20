
/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
export function myMap(arr:number[], func:(a:number)=>number):number[]{
    return arr.map(func);

    //IMPLEMENTATION NEEDED
    }

export function double(num:number):number{
        return 2*num;
    }

    export function cube(num:number):number{
        return num*num*num;
    }
double;
cube;
    
    /**
     * 
     * @param {*} arr 
     * @param {*} func 
     * @returns 
     */
    export function myFilter(arr:number[], func:(num:number)=>boolean):number[] {
    //IMPLEMENTATION NEEDED
    return arr.filter(func)
    }
    
    export function even(num:number):boolean{
       return num%2==0;
    }
    export function greater1(num:number):boolean{
       return num>1;
    }
    


    even
    /**
     * 
     * @param {*} arr 
     * @param {*} func 
     * @param {*} initialValue 
     * @returns 
     */
    export function myReduce(arr:number[], func:(acc:number,current:number )=>number, initial:number):number{
        //IMPLEMENTATION NEEDED
        
        return  arr.reduce(func,initial);
        }

        export function sum(acc:number,current:number):number{
           
            return acc+current;
         
        }

        export function mult(acc:number, current:number):number{
        
           return acc*current;
        }