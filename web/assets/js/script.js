/**
 * Created by Gilles on 28/03/2017.
 */

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
});

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