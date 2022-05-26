// const { read } = require("fs");

var recognition = new webkitSpeechRecognition();
recognition.onresult = function (event) {

    var text = event.results[0][0].transcript;
    var output = document.getElementById("output").innerHTML = text;

    read(text);
}


function read(text) {
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    if (text == 'Salam') {
        speech.text = "owalaikumussalam";
    }
    else if (text == 'how are you') {
        speech.text = "alhamdulillah , what about you";
    }
    else if (text == 'smile') {
        speech.text = "hahahuhuhahuahuahuahu";
    }
    else if (text == 'what is your name') {
        speech.text = "ZONZA and i am your assistant";
    }
    else if (text == 'are you Muslim') {
        speech.text = "yes, i am a Muslim";
    }
    else if (text == 'who is our creator') {
        speech.text = "ALLAH";
    }
    else if (text == 'who is you') {
        speech.text = "ZONZA";
    }
    else if (text == 'thank you') {
        speech.text = "welcome , have a nice day";
    }
    else if (text == 'thank you') {
        speech.text = "welcome";
    }
    else if (text == 'are you muslim') {
        speech.text = "of course";
    }
    else if (text == 'read Shahada') {
        speech.text = "la ilaha illalahu muhammadur rasulullah";
    }
    else if (text == 'what is my favourite food') {
        speech.text = "biriyani";
    }
    else if (text == 'who build you') {
        speech.text = "rimon rifat";
    }
    else if (text == 'who is he') {
        speech.text = "rimon rifat is a web developer who build me";
    }
    else if (text == 'i hate you') {
        speech.text = "i love you too";
    }
    else if (text == 'are you single') {
        speech.text = "make a emotional background sound and say yes";
    }
    else {
        speech.text = "Please Try Again "
    }

    document.getElementById("res").innerHTML = speech.text;
    window.speechSynthesis.speak(speech);
}