

let bets=0;
let wins=0;


for (t = 0; t < trials; t++)
 {
int (cash = stake);
    while (cash > 0 && cash < goal) {
        bets++;
        if (Math.random() < 0.5)
         cash++;   
        else                    
         cash--;     
    }
    if (cash == goal) 
    wins++;
}
        console.log(wins + " wins of " + trials);
        console.log("Percent of games won = " + 100.0 * wins / trials);
        console.log ("Avg # bets           = " + 1.0 * bets / trials);