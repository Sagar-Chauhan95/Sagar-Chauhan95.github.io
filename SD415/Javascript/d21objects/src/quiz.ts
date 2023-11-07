export interface StudentQuiz { studentId: number, quizAnswers : number[] };

export function gradeStudent(studentAnswers :number[], correct: number[]): number{
    let count =0;
    for (let i=0; i<studentAnswers.length; i++){
        if(studentAnswers[i]=== correct[i]){
            count++
        }
        
    }return count;
}

export function gradeQuiz(studentQuiz: number[][], correct:number[]): number[]{
    let resultArray =[];
    for (let i=0; i <studentQuiz.length; i++){
        let count =0;
        for( let j=i; j<=i; j++){
            if(studentQuiz[i][j]===correct[j]){
                count++;
            }
        } resultArray.push(count);

    }return resultArray;

}

export function gradeQuizLabeled(studentQuizzes:number[][],correct:number[] ): number[]{
    let resultArray =[];
    

}