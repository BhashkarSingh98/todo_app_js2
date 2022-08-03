const addbox = document.querySelector("#plusicon1");
popupbox = document.querySelector(".container3");
closeicon = popupbox.querySelector("#close1");
titleteg = popupbox.querySelector("input");
addbtn = popupbox.querySelector("#add1");
addbox.addEventListener("click", () => {
  popupbox.classList.add("show");
});
closeicon.addEventListener("click", () => {
  popupbox.classList.remove("show");
  closeicon.click();
});
addbtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("button clicked");
});
var grab1 = document.getElementById("noitem");
document.getElementById("add1").addEventListener("click", function () {
  grab1.style.visibility = "hidden";
  let inputone = document.getElementById("input1").value;
  let outerelem = document.createElement("div");
  let elem1 = document.createElement("div");
  let subelem1 = document.createElement("p");
  let subelempara = document.createElement("p");
  let subelem2 = document.createElement("hr");
  let subelem3 = document.createElement("div");
  let subelem4 = document.createElement("div");
  let subelem5 = document.createElement("i");
  let subelem6 = document.createElement("div");
  let subelem7 = document.createElement("i");
  ///append child one div
  const innerbox = document.querySelector(".box3");
  innerbox.appendChild(outerelem);
  outerelem.appendChild(elem1);
  elem1.appendChild(subelem1);
  elem1.appendChild(subelempara);
  elem1.appendChild(subelem2);
  elem1.appendChild(subelem3);
  elem1.appendChild(subelem4);
  elem1.appendChild(subelem6);
  subelem4.appendChild(subelem5);
  subelem6.appendChild(subelem7);
  //add class and id
  outerelem.className = "outerelem";
  elem1.className = "trips";
  subelem1.className = "tripplace";
  subelempara.className = "subelempara";
  subelem3.id = "underlinetask";
  subelem4.id = "plusicon2";
  subelem6.id = "delete";
  subelem5.className = "fas fa-plus-circle";
  subelem7.className = "far fa-trash-alt";
  subelem1.innerText = inputone;
  subelempara.innerText = inputone;
  closeicon.click();
  // var current_task = document.querySelectorAll("#delete");
  // for (var i = 0; i < current_task.length; i++) {
  //   current_task[i].onclick = function () {
  //     this.parentNode.remove();
  //     //this.parentElement.remove();
  //   };
  // }

  subelem6.addEventListener("click",
  function(){
    
    outerelem.remove();
  });

  var current_task2 = document.querySelectorAll("#plusicon2 i");
  for (var i = 0; i < current_task2.length; i++) {
    current_task2[i].onclick = function () {
      popupbox2.classList.add("show");
    };
  }
  var current_task3 = document.querySelectorAll("#close2");
  for (var i = 0; i < current_task3.length; i++) {
    current_task3[i].onclick = function () {
      
      popupbox2.classList.remove("show");
    };
  }
  let elem11=document.querySelector(".box3 .trips");
  let elem12=document.querySelector(".outerelem");
  let elem13=document.querySelector(".box3");
  let elem14=document.querySelector(".subelempara");
  subelem1.addEventListener("click",function(){
    elem11.style.position="absolute";
    elem11.style.top="30%";
    elem11.style.left="40%";
    elem11.style.backdropFilter="blur(20px)"
    elem12.style.height="690px"
    elem12.style.width="100%"
    elem13.style.height="700px"
    elem13.style.overflow="hidden"
    elem14.style.position="absolute"
    elem14.style.top="-140px"
    elem14.style.left="50px"
    elem14.style.display="block"
    document.querySelector(".box1").style.visibility="hidden"
    document.querySelector(".backbutton").style.visibility="visible"
  });
  document.querySelector(".backbutton").addEventListener("click",function(){
    elem1.style.position="relative";
    elem1.style.top="0%";
    elem1.style.left="0%";
    elem12.style.height="320px"
    elem12.style.width="230px"
    //elem13.style.height=""
    elem13.style.overflow="visible"
    elem14.style.display="none"
    document.querySelector(".box1").style.visibility="visible";
    document.querySelector(".backbutton").style.visibility="hidden";
  })
});
let popupbox2 = document.querySelector(".container4");
var closeicon2 = popupbox2.querySelector("#close2");
closeicon2.addEventListener("click", () => {
  popupbox.classList.remove("show");
});
document.getElementById("add2").addEventListener("click", function () {
  let popInput=document.getElementById("input2")
  if(popInput.value !== "0"){
  let input = document.getElementById("input2").value;
  let elem2 = document.createElement("li");
  let btn1 = document.createElement("button");
  btn1.className = "buttonhide";
  btn1.innerText = "done";
  elem2.innerText = input;
  //elem2.innerText = input.value;
  elem2.appendChild(btn1);
  let underlinetask = document.querySelector("#underlinetask");
  underlinetask.appendChild(elem2);
  //ading button  functnality
  btn1.addEventListener("click", function () {
    elem2.style.textDecoration = "line-through";
    elem2.style.color="orangered"
    elem2.style.textAlign = "center";
    elem2.style.marginLeft = "0px";
    btn1.remove();
  });
  closeicon2.click();
}
});











//  var grab1 = document.getElementById("noitem");
// var ab = (document.querySelector("#add1").onclick = function () {
//   if (document.querySelector("#input1").value.length == 0) {
//     alert("enter task");
//   } else {
//     grab1.style.visibility="hidden";
//     document.querySelector(".box3").innerHTML += `
//         <div class="trips">
//           <p class="tripplace" >
//           ${document.querySelector("#input1").value}
//           </p>
//           <hr />
//           <div id="underlinetask"></div>

//           <div  id="plusicon2" ><i class="fas fa-plus-circle" ></i></div>
//           <div id="delete"><i class="far fa-trash-alt"></i></div>
//         </div>
//         `;

//     //now delete button
//     var current_task = document.querySelectorAll("#delete");
//     for (var i = 0; i < current_task.length; i++) {
//       current_task[i].onclick = function () {
//         this.parentNode.remove();
//       };
//     }
//     closeicon.click();
//     popupbox2 = document.querySelector(".container4");
//     closeicon2 = popupbox2.querySelector("#close2");

//     var current_task2 = document.querySelectorAll("#plusicon2 i");
//     for (var i = 0; i < current_task2.length; i++) {
//       current_task2[i].onclick = function () {
//         popupbox2.classList.add("show");
//       };
//     }
//     var current_task3 = document.querySelectorAll("#close2");
//     for (var i = 0; i < current_task3.length; i++) {
//       current_task3[i].onclick = function () {
//         popupbox2.classList.remove("show");
//       };
//     }
//   }
// });

// document.getElementById("add2").addEventListener("click",
// function(){
//   let input=document.getElementById("input2").value;
//   let elem2=document.createElement("li");
//   let btn1=document.createElement('button');
//   btn1.className="buttonhide"
//   btn1.innerText="done";
//   elem2.innerText=input;
//   elem2.appendChild(btn1)
//   let underlinetask =document.querySelector("#underlinetask");
//   underlinetask.appendChild(elem2);
//   //ading button  functnality
//   btn1.addEventListener("click",
//   function(){
//     elem2.style.textDecoration="line-through"
//     elem2.style.textAlign= "center";
//     elem2.style.marginLeft="0px";
//     btn1.remove();
//   }
//   )
//      closeicon2.click();

// });

// document.querySelector("#delete").deletecard.addEventListener("click",
// function(){

//   elem1.remove();
// }

// var current_task = document.querySelectorAll("#delete");
// for (var i = 0; i < current_task.length; i++) {
//   current_task[i].onclick = function () {
//     this.parentNode.remove();
//   };
// }
// closeicon.click();
// popupbox2 = document.querySelector(".container4");
// closeicon2 = popupbox2.querySelector("#close2");

// var current_task2 = document.querySelectorAll("#plusicon2 i");
// for (var i = 0; i < current_task2.length; i++) {
//   current_task2[i].onclick = function () {
//     popupbox2.classList.add("show");
//   };
// }
// var current_task3 = document.querySelectorAll("#close2");
// for (var i = 0; i < current_task3.length; i++) {
//   current_task3[i].onclick = function () {
//     popupbox2.classList.remove("show");
//   };
// }

//});

//});

// document.getElementById("add2").addEventListener("click",
// function(){
//   let input=document.getElementById("input2").value;
//   let elem2=document.createElement("li");
//   let btn1=document.createElement('button');
//   btn1.className="buttonhide"
//   btn1.innerText="done";
//   elem2.innerText=input;
//   elem2.appendChild(btn1)
//   let underlinetask =document.querySelector("#underlinetask");
//   underlinetask.appendChild(elem2);
//   //ading button  functnality
//   btn1.addEventListener("click",
//   function(){
//     elem2.style.textDecoration="line-through"
//     elem2.style.textAlign= "center";
//     elem2.style.marginLeft="0px";
//     btn1.remove();
//   }
//   )
//      closeicon2.click();

// });

// var current_task4 = document.querySelector("#add2");
// current_task4.onclick = function (e) {
//   const popInput=document.getElementById("input2");

//   // if (document.querySelector("#input2").value.length == 0) {
//   //   alert("enter task");
//   // } else
//   if(popInput.value !== ""){
//     document.querySelector("#underlinetask").innerHTML += `
//         <div class="trips2">
//           <p class="tripplace2" id="tripplace2">
//           ${document.querySelector("#input2").value}
//           </p>
//           <button id="mark" class="hello">mark done</button>
//         </div>
//         `;
//   }

//   e.preventDefault();
//   console.log("button clicked");
//   closeicon2.click();

//    var doneButton=document.querySelector("#mark");
//   var doneButton2=document.querySelector("#tripplace2")
//   doneButton.addEventListener("click", () => {
//       doneButton2.style.textDecoration = "line-through";
//       doneButton.remove("remove");
//     });

// };
///when i click trip to paris

//  const current_task7=document.querySelector(".tripplace");
// // current_task7.onclick=function(){
// //   current_task7.style.color="red";
// // }
// current_task7.addEventListener("click", () => {
//   current_task7.style.color="red";

// });
// document.querySelector(".tripplace").addEventListener("click", () => {
//   document.querySelector(".tripplace").style.color="red";

// });

// document.querySelector(".tripplace").addEventListener("click", addtodo)
// function addtodo(e){
//   e.preventDefault();
//   e.style.color='red';

//}
//});