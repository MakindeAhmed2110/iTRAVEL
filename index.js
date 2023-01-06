function myFunction(){
    var x =
    document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text"
    }else{
        x.type = "password";
    }
    document.getElementById("password").innerHTML = "Hide Password";
}
function myMakinde(){
  document.getElementById("h2-one").innerHTML = "Information collected are :";
  
  var fullname = document.getElementById('fullname').value;
    if(fullname === ""){
         alert("You submitted an empty form , please enter your name");
    }else{
         alert(`Thanks for signing up for iTravel website, ${fullname}`);
     }        
}
function myPortfolio(){
    alert('The Developer "Makinde Ahmed" does not have a personal website yet, changes would be made when it is available');
}
function myMum(){
  alert('Kindly navigate to the homepage to use this features as it was included in iTravel homepage');
};
function myAhmed(){
  alert('Kindly Click On The Cancel Button At the top right of the box')
}

window.addEventListener("load", function(){
  setTimeout(
    function open(event){
      document.querySelector(".popup").style.display = "block";
    },
    1000
  )
});

document.querySelector("#close").addEventListener("click", function(){
  document.querySelector(".popup").style.display  = "none";
});



