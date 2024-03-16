var choices=document.querySelectorAll('.choice');
var user_content=document.querySelector('.uscore');
var user_score=document.querySelector('#uscore');
var comp_score=document.querySelector('#cscore');
var answer=document.querySelector('.answer');

let user_count=0;
let comp_count=0;
function get_winner_move(user_move,comp_move){
    if((user_move=='paper' && comp_move=='rock')||(user_move=='rock' && comp_move=='scissors')||(user_move=='scissors' && comp_move=='paper'))
    {
        user_count=user_count+1;
        user_score.innerText=`${user_count}`;
        answer.innerText=`Congratulations!! User is Winner.`;
        answer.style.backgroundColor='green';

        console.log("user is winnner");
        console.log("Users move:" + user_move);
        console.log("Computers move: " + comp_move);
    }
    else {
        comp_count=comp_count+1;
        comp_score.innerText=`${comp_count}`;
        answer.innerText=`Sorry!! Computer is Winner`;
        answer.style.backgroundColor='red';
        console.log("Computer is winner");
        console.log("Users move:" + user_move);
        console.log("Computers move: " + comp_move);
    }
}

function check_winner_move(user_move){
    let choices_array=[choices[0].id,choices[1].id,choices[2].id];
    let min = 0;
    let max = choices_array.length-1;
    let random = Math.floor(Math.random() * (+max - +min)) + +min;
    if(user_move==choices_array[random])
    {
        answer.innerText=`Ohh!! Match is Tied`;
        answer.style.backgroundColor='grey';

        
    console.log("Match is Tied");
    }
    else if(get_winner_move(user_move,choices_array[random]));
}
choices.forEach((choice)=>
{
   
        choice.addEventListener("click",()=>
        {
            check_winner_move(choice.id);
        })
})
