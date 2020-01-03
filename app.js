var activeplayer, roundscore, score, gamePlay;

roundscore=0;
activeplayer=0;
score=[0,0];
gamePlay=true;


//dice=Math.floor(Math.random()*6)+1;

//document.querySelector('#current-'+activeplayer).textContent=dice;
//document.querySelector('#current-'+activeplayer).innerHTML='<em>'+dice+'</em>';

//var x=document.querySelector('#score-0').textContent;
//console.log(x);

document.querySelector('.dice').style.display='none';

document.getElementById('score-0').textContent='0';
document.querySelector('#score-1').textContent='0';


document.querySelector('.btn_rol').addEventListener('click',
    function(){
        if(gamePlay){
        //1.random number
        var dice=Math.floor(Math.random()*6)+1;

        //2. display dice
        var vise=document.querySelector('.dice');
        vise.style.display='block';
        vise.src='dice-'+dice+'.png';
        

        if(dice!==1){
            roundscore+=dice;
            document.querySelector('#current-'+activeplayer).textContent=roundscore;
      
        }
        else{
            score[activeplayer]+=roundscore;
            document.querySelector('#score-'+activeplayer).textContent=score[activeplayer];
            
            if(score[activeplayer]>=50){
                var z=document.querySelector('#name-'+activeplayer);
                z.textContent='winner';
                z.style.color='red';
                gamePlay=false;
                //var r=document.querySelector('.btn_rol');
                //r.disabled=true;
                document.querySelector('.dice').style.display='none';
                document.querySelector('.btn_rol').classList.add('winer');
                //document.querySelector('.player').classList.add('winer');
                document.querySelector('#current-'+activeplayer).textContent=0;
            
                //document.querySelector('.block-'+activeplayer).classList.remove('active');
                //r.style.border='1px solid black';
            }else{
                change();
                //gamePlay=true;
            }

           
        }
    }
}
    
)



document.querySelector('.btn_hold').addEventListener('click',
    function(){
        score[activeplayer]+=roundscore;
        document.querySelector('#score-'+activeplayer).textContent=score[activeplayer];
    
        change();
    }

)

document.querySelector('.btn_new').addEventListener('click', 
    function(){
        roundscore=0;
        activeplayer=0;
        score=[0,0];
        gamePlay=true;
        document.querySelector('.dice').style.display='none';
        document.getElementById('score-0').textContent=activeplayer;
        document.querySelector('#score-1').textContent=activeplayer;
        document.querySelector('#score-0').textContent=0;
        document.querySelector('#score-1').textContent=0;
        //document.querySelector('#current-'+activeplayer).textContent=0;
        var x=document.querySelector('#name-0');
        x.textContent="player_1";
        x.style.color='black';
        var y=document.querySelector('#name-1');
        y.textContent="player_2";
        y.style.color='#616059';
        var r=document.querySelector('.btn_rol');
            r.disabled=false;


        document.querySelector('.btn_rol').classList.remove('winer');
        //change();
        document.querySelector('.block-0').classList.add('active');
        document.querySelector('.block-1').classList.remove('active');
    }
)

function change(){
    //document.querySelector('.block-'+activeplayer).classList.remove('active');
    document.querySelector('.block-0').classList.toggle('active');
    document.querySelector('.block-1').classList.toggle('active');         
    document.querySelector('#current-'+activeplayer).textContent=0;
    activeplayer===0?activeplayer=1:activeplayer=0;
    roundscore=0;
    document.querySelector('.dice').style.display='none';
    
    //document.querySelector('.block-'+activeplayer).classList.add('active');
}