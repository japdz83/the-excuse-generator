


    let who = ['the dog','my granma','his turtle','my bird'];
    let what = ['eat','pissed','crushed','broked'];
    let when = ['before the class','right in time','when I finished','during my lunch','while I was praying']; 
    
    let numWho = Math.floor(who.length*Math.random());
    let numWhat = Math.floor(what.length*Math.random());
    let numWhen = Math.floor(when.length*Math.random());

    let resultExcuse = ` ${who[numWho]} ${what[numWhat]} la tarea  ${when[numWhen]} `; 


console.log(resultExcuse);
document.querySelector('#excuse').innerHTML = resultExcuse;
