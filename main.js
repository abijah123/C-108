function startClassification()
{
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/T4vdIDC99/model.json",modelReady);
}
function modelReady()
{
classifier.classify(gotResults);
}
function gotResults(error,results)
{
if(error){
console.error(error);
}
else{
console.log(results);
random_number_r = Math.floor(Math.random() * 255) + 1;
random_number_G = Math.floor(Math.random() * 255) + 1;
random_number_r = Math.floor(Math.random() * 255) + 1;

document.getElementById("result_label").innerHTML = 'I can hear - '+
results[0].label;
document.getElementById("result_confidence").innerHTML = 'Accuracy -'+
(results[0].confidence*100).toFixed(2)+"%";
document.getElementById("result_label").style.color = "rgb("
+random_number_r+","+random_number_G+","+random_number_r+")";
document.getElementById("result_confidence").style.color = "rgb("
+random_number_r+","+random_number_G+","+random_number_r+")";
img = document.getElementById('images');
img1 = document.getElementById('elephant');
img2 = document.getElementById('dog');
img3 = document.getElementById('cat');
if (results[0].label == "Clap") {
    img.src = 'images.gif';
    img1.src = 'elephant.jpg';
    img2.src = 'dog.webp';
    img3.src = 'cat.jpg';
    }else if(results[0].label == "Thump") {
        img.src = 'images.png';
        img1.src = 'elephant.gif';
        img2.src = 'dog.webp';
        img3.src = 'cat.jpg';
    }else if (results[0].label == "Snap") {
        img.src = 'images.png';
        img1.src = 'elephant.png';
        img2.src = 'dog.gif';
        img3.src = 'cat.jpg';
    }else{
    img.src = 'images.png';
    img1.src = 'elephant.png';
    img2.src = 'dog.webp';
    img3.src = 'cat.gif';
}
}
}