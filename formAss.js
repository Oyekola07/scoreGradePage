let score = document.getElementById('grade');


function grader(){


if(score.value >= 70 && score.value <= 100){
document.getElementById('output').innerHTML= ' Your Grade is: A'
document.getElementById('output').style.color = "darkgreen"

}else if(score.value >= 60 && score.value <=69){
    document.getElementById('output').innerHTML= 'Your Grade is: B'
    document.getElementById('output').style.color = "darkgreen"

}else if(score.value >= 50 && score.value <= 59){
    document.getElementById('output').innerHTML= 'Your Grade is: C'
    document.getElementById('output').style.color = "blue"

}else if(score.value >=45 && score.value <= 49){
    document.getElementById('output').innerHTML= 'Your Grade is: D'
    document.getElementById('output').style.color = "blue"

}else if(score.value >= 40 && score.value <= 45){
    document.getElementById('output').innerHTML= 'Your Grade is: E'
    document.getElementById('output').style.color = "blue"
    
}else if(score.value >= 0 && score.value <= 40){
    document.getElementById('output').innerHTML= 'Your Grade is: F'
    document.getElementById('output').style.color = "red"
}

else{
    alert('You entered an invalid score, press ok to continue')
}




}







