
var rules_btn = document.querySelectorAll(".open_rules")
var rulebox = document.querySelectorAll(".game_rules")
var cancel_btn = document.querySelectorAll(".cancel")
var next_btn = document.querySelector("#next_btn")
var replay_btn=document.querySelectorAll('.replay')
var home_screen= document.getElementById('home_screen')
var tie_up_screen = document.querySelector("#tie_up_screen")
var you_lost_screen =document.querySelector("#you_lost_screen")
var you_win_screen = document.querySelector("#you_win_screen")
var hurray_screen = document.querySelector("#hurray_screen")

var user_score = parseInt(sessionStorage.getItem('storedValue_user_score')) || 0;
var pc_score = parseInt(sessionStorage.getItem('storedValue_pc_score')) || 0;


// var user_score= 0 || parseInt(sessionStorage.getItem('storedValue_user_score'))
// var pc_score= 0 || parseInt(sessionStorage.getItem('storedValue_pc_score'))
// displayLocalStorageValue()
document.querySelector('.user_score').innerHTML=user_score
document.querySelector('.pc_score').innerHTML=pc_score

// localStorage.removeItem('my_score');
// localStorage.removeItem('pc_score');
let user_choice=''
let pc_choice=''


let rock='<div class="rock"><img id="rock" src="assets/rock.svg" height="100px" width="100px" alt=""></div>'
let paper='<div class="paper"><img id="paper" src="assets/paper.svg"" height="100px" width="100px"  alt=""></div>'
let scissor='<div class="scissor"><img id="scissor" src="assets/scissor.svg" height="80px" width="80px" alt=""></div>'
let dict={'rock':rock, 'paper':paper, 'scissor':scissor }
let listEle=['rock','paper','scissor']


// // rules_btn.addEventListener('click', () => rulesclickHandler())
// rules_btn.forEach((elem)=>{
//       console.log(elem)
// elem.addEventListener("click",rulesclickHandler)
// })



console.log(next_btn,"heeeeeee")
next_btn.addEventListener("click",nextToHurray)
function nextToHurray(){
      console.log("hellllllllo")
            tie_up_screen.style.display='none';
            you_lost_screen.style.display='none';
            you_win_screen.style.display='none';
            hurray_screen.style.display= 'block';
}


rules_btn.forEach((elem) => {
      console.log(elem);
      elem.addEventListener("click", rulesclickHandler);
});

function rulesclickHandler(){
      rulebox.forEach((elem)=>{
            elem.style.display = 'block';
      })
      
      cancel_btn.forEach((elem)=>{
            // try{
                  elem.style.display = 'flex';
            // }
            // catch{
                  
            // }
      })

}

cancel_btn.forEach((elem) => {
      console.log(elem);
      elem.addEventListener("click", closegamerulesHandler);
});

// cancel_btn.addEventListener('click',closegamerulesHandler)
function closegamerulesHandler(){
      rulebox.forEach((elem)=>{
            elem.style.display = 'none';
      })
      
      cancel_btn.forEach((elem)=>{
            elem.style.display = 'none';
      })
// rulebox.style.display='none';
// cancel_btn.style.display='none';
}




let play = document.querySelector('#play');
play.addEventListener('click',getUserChoice);

function getUserChoice(event){
      
      user_choice = event.target.id;
      pc_choice = getPCChoice()

      if(user_choice==pc_choice){
//tie up
            document.querySelectorAll('.pc_score').forEach((elem)=>{
                  elem.innerHTML=pc_score
                })
                document.querySelectorAll('.user_score').forEach((elem)=>{
                  elem.innerHTML=user_score
                })
      console.log(user_choice)
      console.log(pc_choice)
            
            // let you_pick= document.querySelector('#tie_up_screen #your_choice')
            // let you_selected_tag=document.querySelector(`#${user_choice}`)
            
            // you_pick.innerHTML=''
            // you_pick.appendChild(you_selected_tag);

            // let pc_pick= document.querySelector('#tie_up_screen #pc_choice')
            // let pc_selected_tag=document.querySelector(`#${pc_choice}`)

            // pc_pick.innerHTML=''
            // pc_pick.appendChild(pc_selected_tag);

            // tie_up_screen.style.display='block';
            // you_lost_screen.style.display='none';
            // you_win_screen.style.display='none'

            let you_pick= document.querySelector('#tie_up_screen #your_choice')
            you_pick.innerHTML=''
            you_pick.innerHTML=dict[user_choice]
            let pc_pick= document.querySelector('#tie_up_screen #pc_choice')
            pc_pick.innerHTML=''
            pc_pick.innerHTML=dict[user_choice]

            tie_up_screen.style.display='block';
            you_lost_screen.style.display='none';
            you_win_screen.style.display='none';
            hurray_screen.style.display='none';
            home_screen.style.display='none'


            console.log(you_pick)
            // console.log(you_selected_tag)
            console.log(pc_pick)
            // console.log(pc_selected_tag)
            
            console.log('Tie up!')
            setLocalStorageVariable()
            
        }
      else if((user_choice=="rock" && pc_choice=="scissor") ||
                (user_choice=="scissor" && pc_choice=="paper") ||
                (user_choice=="paper" && pc_choice=="rock")) {
             //I am winner
             user_score+=1
             document.querySelectorAll('.user_score').forEach((elem)=>{
                  elem.innerHTML=user_score
             })
             document.querySelectorAll('.pc_score').forEach((elem)=>{
                  elem.innerHTML=pc_score
             })

             console.log('I am winner')


             console.log(user_choice)
             console.log(pc_choice)
                   //tie up
                  //  let you_pick= document.querySelector('#you_win_screen #your_choice')
                  //  let you_selected_tag=document.querySelector(`#${user_choice}`)
                   
                  //  you_pick.innerHTML=''
                  //  you_pick.appendChild(you_selected_tag);
       
                  //  let pc_pick= document.querySelector('#you_win_screen #pc_choice')
                  //  let pc_selected_tag=document.querySelector(`#${pc_choice}`)
       
                  //  pc_pick.innerHTML=''
                  //  pc_pick.appendChild(pc_selected_tag);

                  let you_pick= document.querySelector('#you_win_screen #your_choice')
                  you_pick.innerHTML=''
                  you_pick.innerHTML=dict[user_choice]
                  let pc_pick= document.querySelector('#you_win_screen #pc_choice')
            pc_pick.innerHTML=''
            pc_pick.innerHTML=dict[pc_choice]

       
                   you_win_screen.style.display='block';
                   tie_up_screen.style.display='none';
                   you_lost_screen.style.display='none'
                   hurray_screen.style.display='none'
                   home_screen.style.display='none'


                   
       
                   console.log(you_pick)
                  //  console.log(you_selected_tag)
                   console.log(pc_pick)
                  //  console.log(pc_selected_tag)
                  setLocalStorageVariable()

      }
      else if( listEle.includes(user_choice) ){
            
                //Computer Winner
                console.log('I am loser')
                pc_score+=1
                document.querySelectorAll('.pc_score').forEach((elem)=>{
                  elem.innerHTML=pc_score
                })
                document.querySelectorAll('.user_score').forEach((elem)=>{
                  elem.innerHTML=user_score
                })

                console.log(user_choice)
                console.log(pc_choice)
                      //tie up
                  //     let you_pick= document.querySelector('#you_lost_screen #your_choice')
                  //     let you_selected_tag=document.querySelector(`#${user_choice}`)
                      
                  //     you_pick.innerHTML=''
                  //     you_pick.appendChild(you_selected_tag);
          
                  //     let pc_pick= document.querySelector('#you_lost_screen #pc_choice')
                  //     let pc_selected_tag=document.querySelector(`#${pc_choice}`)
          
                  //     pc_pick.innerHTML=''
                  //     pc_pick.appendChild(pc_selected_tag);

                      let you_pick= document.querySelector('#you_lost_screen #your_choice')
                  you_pick.innerHTML=''
                  you_pick.innerHTML=dict[user_choice]
                  let pc_pick= document.querySelector('#you_lost_screen #pc_choice')
            pc_pick.innerHTML=''
            pc_pick.innerHTML=dict[pc_choice]
          
                      you_lost_screen.style.display='block';
                      you_win_screen.style.display='none'
                      tie_up_screen.style.display='none'
                      hurray_screen.style.display='none'
                      home_screen.style.display='none'
          
                      console.log(you_pick)
                  //     console.log(you_selected_tag)
                      console.log(pc_pick)
                  //     console.log(pc_selected_tag)
                  setLocalStorageVariable()
                      
      }    

  }

  function getPCChoice(){
      let optionsarr=['rock','paper','scissor'];
      let idx=Math.floor(Math.random()*3);
      compchoice=optionsarr[idx];
      return compchoice
}


// document.addEventListener('DOMContentLoaded', function() {
//       let rock = document.querySelector('#rock');
//       rock.addEventListener('click', function(event) {
//           let clickedId = event.target.id;
//           console.log(clickedId);
//       });
//   });
  

var play_again_hurray=document.getElementById('play_again_text')
play_again_hurray.addEventListener('click',hurrayToHome)
function hurrayToHome(){
      hurray_screen.style.display='none'
home_screen.style.display='block'
}

replay_btn.forEach((elem)=>{
      elem.addEventListener('click',replayToHome)
})
function replayToHome(){
      home_screen.style.display='block'
      you_lost_screen.style.display='none';
                      you_win_screen.style.display='none'
                      tie_up_screen.style.display='none'
                      hurray_screen.style.display='none'
}


function isLocalStorageSupported() {
      try {
            sessionStorage.setItem('test', 'test');
            sessionStorage.removeItem('test');
          return true;
      } catch (e) {
          return false;
      }
  }

  function setLocalStorageVariable() {
      if (isLocalStorageSupported()) {
          var user_score_local = document.querySelector('.user_score').innerHTML;
          var pc_score_local = document.querySelector('.pc_score').innerHTML;
          
          sessionStorage.setItem('storedValue_user_score', user_score_local);
          sessionStorage.setItem('storedValue_pc_score', pc_score_local);
      //     displayLocalStorageValue();
      } else {
          alert('Local storage is not supported in this browser.');
      }
  }

  function displayLocalStorageValue() {
      
      var user_score_local = sessionStorage.getItem('storedValue_user_score');
      var pc_score_local = sessionStorage.getItem('storedValue_pc_score');
      if (user_score_local && pc_score_local) {
          document.querySelector('.user_score').innerHTML = user_score_local;
          document.querySelector('.pc_score').innerHTML = pc_score_local
      } else {
      //     document.getElementById('display').innerHTML = 'No value stored.';
      }
  }

//   setLocalStorageVariable()