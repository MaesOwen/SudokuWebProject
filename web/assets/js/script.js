var beginScherm = function () {
    $('#selectDifficulty').hide();
    $('#SudokuGame').hide();
    $('#Congratulations').hide();
    $('#Solution').hide();
};

var gaVerderVanStartScherm = function (e) {
    e.preventDefault();
    $('#HoofdMenu').hide();
    $('#selectDifficulty').show();
};

var startTheGame = function (e) {
    e.preventDefault();
    $('#selectDifficulty').hide();
    $('#SudokuGame').show();
    $('#Controle').hide();
};

var controleerOplossing =function() {
    $('#Controle').show();
    $('#theGame').hide();
};

var continueNaControle = function () {
    $('#Controle').hide();
    $('#theGame').show();
};

var restartNaControle = function () {
    $('#Controle').hide();
    $('#theGame').show();
};

var eindeSpelBijJuisteOplossing = function () {
    $('#SudokuGame').hide();
    $('#Congratulations').show();
    $('#HighScores').hide();
};

var viewHighscores = function () {
    $('#Einde').hide();
    $('#viewHighscores').show();
};

var restartNaEindeSpel = function () {
    beginScherm();
    $('#HoofdMenu').show();
};

var viewSolution = function () {
    $('#Congratulations').hide();
    $('#Solution').show();
}

var goBackFromSolution = function () {
    $('#Congratulations').show();
    $('#Solution').hide();
    $('#HighScores').hide();
    $('#Einde').show();
};


// Local storage
var namen = [];
var saveToLocalStorage1 = function () {
    if (typeof Storage != void(0)) {
        localStorage.setItem("namen", JSON.stringify(namen));
    }
};
saveToLocalStorage1("1");
var processForm1 = function (e) {
    e.preventDefault();
    var naam = $('#name').val();
    namen.push(naam);

    saveToLocalStorage1();
    fillInList();
};
var fillInList = function () {
    if (typeof Storage != void(0)) {
        namen = JSON.parse(localStorage.getItem("namen"));
        var html = "";
        for (var i = 0; i < namen.length; i++) {
            html += "<li>" + namen[i] + "</li>";
        }
    }
    $('#namenToBeat').html(html);
    $('#namen').html(html);

};


// Timer
var sec = 0;
var min = 0;
var uur = 0;
var i = null;

var interval = function (e) {
    e.preventDefault();
    i = window.setInterval(process, 1000);


};

var process = function () {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++;
    }
    if (min == 60) {
        min = 0;
        uur++;
    }

    if (uur < 10) {
        if (min < 10) {
            if (sec < 10) {
                $('#log').html("0" + uur + ":0" + min + ":0" + sec);
            }
            if (sec >= 10){
                $('#log').html("0" + uur + ":0" + min + ":" + sec);
            }
        }
        if (min >= 10){
            if (sec < 10) {
                $('#log').html("0" + uur + ":" + min + ":0" + sec);
            }
            if (sec >= 10){
                $('#log').html("0" + uur + ":" + min + ":" + sec);
            }
        }
    }
    if (uur >= 10) {
        if (min < 10) {
            if (sec < 10) {
                $('#log').html(uur + ":0" + min + ":0" + sec);
            }
            if (sec >= 10){
                $('#log').html(uur + ":0" + min + ":" + sec);
            }
        }
        if (min >= 10){
            if (sec < 10) {
                $('#log').html(uur + ":" + min + ":0" + sec);
            }
            if (sec >= 10){
                $('#log').html(uur + ":" + min + ":" + sec);
            }
        }
    }
    if (sec == 10){
        window.clearInterval(i);
        var time = $('#log').html();
        console.log(time);
    }
};


// Ready handler
$(document).ready(function () {
    beginScherm();
    $('#enterName').on('submit', gaVerderVanStartScherm);
    $('#startGame').on('submit', startTheGame);
    $('#controleer').on('click', controleerOplossing);
    $('#Continue').on('click', continueNaControle);
    $('#Restart').on('click', restartNaControle);
    $('#Finish').on('click', eindeSpelBijJuisteOplossing);
    $('#viewHighscores').on('click', viewHighscores);
    $('#Restart2').on('click', restartNaEindeSpel);
    $('#viewSolution').on('click', viewSolution);
    $('#goBackFromSolution').on('click', goBackFromSolution);
    $('#test').on('submit', processForm1).on('submit', interval);
    fillInList();
});
