//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(score) {
        this.scores.push(score);
    }
    average(){
        let numThings = 0;
        let total = 0;
        for (let i=0; i<this.scores.length; i++){
             total += this.scores[i];
             numThings += 1;
         }
        let average = (total/numThings).toFixed(1);
        return average;
    }
    status(){
        let averageScore = this.average();
        let status = "";
        if (averageScore >= 90) {
            status = "Accepted";
        }
        else if (averageScore >= 80){
            status = "Reserve";
        }
        else if (averageScore >= 70){
            status = "Probationary";
        }
        else {
            status = "Rejected";
        }
        return /*(`${this.name} earned an average test score of ${averageScore}% and has a status of ${status}.`)*/status;
    }
   

}

 bubbaBear = new CrewCandidate("Bubba Bear", 135, [88,85,90]);
 merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93,88,97]);
 gladGator = new CrewCandidate("Glad Gator", 225, [75,78,62]);

// console.log(bubbaBear, merryMaltese, gladGator);

// bubbaBear.addScore(83);
// console.log(bubbaBear.scores);
// console.log(merryMaltese.average());
// console.log(bubbaBear.status());
// console.log(merryMaltese.status());
// console.log(gladGator.status());

let numAdded = 0;

while (gladGator.status() !== "Reserve"){
    numAdded += 1;
    gladGator.addScore(100);
    // console.log(gladGator.status());
}
console.log(`It took ${numAdded} 100% scores being added to have Glad Gator reach ${gladGator.status()} and an average of ${gladGator.average()}%.`);

// console.log(bubbaBear.scores[i]);
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.