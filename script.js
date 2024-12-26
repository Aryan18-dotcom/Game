let time = 5
let click = 0
let TimmerInt
let RandomeNumHit
let PlayArea = document.querySelector(".PlayArea");
let score = 0
let wrong = document.querySelector('#Wrong')
let SetTimmer

function BubbleDispaly() {
    var clutter = ""
        for(var i = 1; i<=156; i++){
        var RandomeNum = Math.floor(Math.random()*10)
        clutter += ` <div class="bubble">
            <h4>${RandomeNum}</h4>
            </div>`
        }
    document.querySelector(".PlayArea").innerHTML = clutter
}


function Timmer(){
    TimmerInt = setInterval(function(){
            
        if(time > 0){
            time--
            document.getElementById("Timer").innerHTML = time
            document.querySelector('#content').innerHTML = `Stop`
            click = 1
            document.querySelector('#over').style.display = "none"

            
        }else if(time === 0){
            document.querySelector("#Hit").innerHTML = `0`
            document.querySelector("#Score").innerHTML = `00`
            document.querySelector("#Timer").innerHTML = `00`
            document.querySelector('#DisplayScore').innerHTML = `Score :${score}`
            document.querySelector('#over').style.display = "flex"
            document.querySelector('#content').innerHTML = `Ready To Start`
            click = 0
            clearInterval(TimmerInt)

        }
    },1000)
}


function HitAndAddScore(){
    RandomeNumHit = Math.floor(Math.random() * 10);
    document.querySelector("#Hit").innerHTML = RandomeNumHit;


    PlayArea.addEventListener("click",function(elem){

        if( elem.target.tagName === "H4" ){
           if(parseInt(elem.target.textContent) === RandomeNumHit){
                score += 10
                document.querySelector("#Score").textContent = score
                RandomeNumHit = Math.floor(Math.random() * 10);
                document.querySelector("#Hit").innerHTML = RandomeNumHit;
                BubbleDispaly()
                
           }
           else{
                wrong.style.display = 'flex'
                RandomeNumHit = Math.floor(Math.random() * 10);
                document.querySelector("#Hit").innerHTML = RandomeNumHit;
                PlayArea.style.PointerEvent = 'none'
                BubbleDispaly()
                clearInterval(TimmerInt)

                if(wrong.style.display === 'flex'){
                    SetTimmer = setTimeout(function() {
                        wrong.style.display = 'none';
                        Timmer()
                    }, 500);
                }
            }
        
        }
        else{
            console.log("timmer stop");
            clearInterval(TimmerInt)
            const restart = confirm("You clicked outside the bubble")
            if(restart){
                time
                Timmer()
                document.querySelector('#PlayArea').style.PointerEvent = 'none'
                BubbleDispaly()
            }
        }
    })
}


function ReadyToStart(){
    document.querySelector('#start').addEventListener('click',function(){
        if(click === 0){
            click++
            document.querySelector('#content').innerHTML = `Stop`
            Timmer()
            if(time === 0){
                time = 5
            }
            HitAndAddScore()
        }else{
            click--
            score = 0
            document.querySelector('#content').innerHTML = `Ready To Start`
            clearInterval(TimmerInt)
            PlayArea.style.PointerEvent = 'none'
        }
    })

}



BubbleDispaly()
ReadyToStart()



