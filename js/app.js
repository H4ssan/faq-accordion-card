const question = document.getElementsByClassName("question");


for(let i=0;i<question.length;i++){
  question[i].addEventListener("click", function(){
    this.classList.toggle("active");
    
    

    const ans = this.nextElementSibling;
    if (ans.style.display === "block") {
      ans.style.display = "none";
    } else {
      ans.style.display = "block";
    }
  });
}

  