function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/POnK_g-8k/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
document.getElementById("result_label").innerHTML= "i can hear - " + results[0].label;
document.getElementById("result_confidence").innerHTML= "accuracy - " +(results[0].confidence*100).toFixed(2)+ "%";
img1 = document.getElementById("alien1");
if(results[0].label=="Dog Bark"){
img1.src= "dog.jpg";
}
else if(results[0].label=="Meow"){
  img1.src= "cat.jpg";
  }
  else if(results[0].label=="Roar"){
    img1.src= "lions.jpg";
    }
    else{
      img1.src= "ear.jpg";
      }
}
}