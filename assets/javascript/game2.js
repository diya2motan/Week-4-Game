// Creating a giant Game object that will house all of our logic and variables.
var characters = {

    // Object of all words that can be chosen, along with info
    char1: {
        charName: "char1",
        charImageScr: "../images/char1.jpg",
        charHealthPoints: 120,
        charAttackPower: 8,
        charCounterAttackPower: 25

    },
    char2: {
        charName: "char2",
        charImageScr: "../images/char2.jpg",
        charHealthPoints: 100,
        charAttackPower: 6,
        charCounterAttackPower: 8
    },
    char3: {
        charName: "char3",
        charImageScr: "../images/char3.jpg",
        charHealthPoints: 150,
        charAttackPower: 20,
        charCounterAttackPower: 10
    },
    char4: {
        charName: "char4",
        charImageScr: "../images/char4.jpg",
        charHealthPoints: 180,
        charAttackPower: 10,
        charCounterAttackPower: 12
    },
};

var gameOver = false;
var lockDivsTem = false;
var charSelected = false;
var enemySelected = false;
var enemiesRunOut = false;
var count = 0;
var yourCharacter;
var defender;
var charBaseAttackPower = 0;

$(document).ready(function() {
   
    $(document).on("click", "div", function() {

        //check if enemies are done
        // while (!enemiesFinished) {
        //     //selectEnemies(except);
        //     startFighting();
        // }
        //select character
        if ($(this).hasClass("char1-div") && !gameOver && !charSelected) {
            charSelected = true;
            yourCharacter = characters.char1;
            charBaseAttackPower = yourCharacter.charAttackPower;
            // charNewAttackPower = charBaseAttackPower;
            $("#characters-available-row").hide();
            // $("#char2-div").hide();
            // $("#char3-div").hide();
            // $("#char4-div").hide();

            $("#char2-div").removeClass("char-image-div-before");
            $("#char2-div").addClass("char-image-div-after enemy");

            $("#char3-div").removeClass("char-image-div-before");
            $("#char3-div").addClass("char-image-div-after enemy");

            $("#char4-div").removeClass("char-image-div-before");
            $("#char4-div").addClass("char-image-div-after enemy");

            $(".your-character").append($("#char1-div"));
            $(".enemies-available-div").append($("#char2-div"));
            $(".enemies-available-div").append($("#char3-div"));
            $(".enemies-available-div").append($("#char4-div"));

            $("#char2-div").show();
            $("#char3-div").show();
            $("#char4-div").show();
            console.log(yourCharacter.charAttackPower);



        } else if ($(this).hasClass("char2-div") && !gameOver && !charSelected) {

            charSelected = true;
            yourCharacter = characters.char2;
            charBaseAttackPower = yourCharacter.charAttackPower;
            // charNewAttackPower = charBaseAttackPower;
            $("#characters-available-row").hide();
            // $("#char2-div").hide();
            // $("#char3-div").hide();
            // $("#char4-div").hide();

            $("#char1-div").removeClass("char-image-div-before");
            $("#char1-div").addClass("char-image-div-after enemy");

            $("#char3-div").removeClass("char-image-div-before");
            $("#char3-div").addClass("char-image-div-after enemy");

            $("#char4-div").removeClass("char-image-div-before");
            $("#char4-div").addClass("char-image-div-after enemy");

            $(".your-character").append($("#char2-div"));
            $(".enemies-available-div").append($("#char1-div"));
            $(".enemies-available-div").append($("#char3-div"));
            $(".enemies-available-div").append($("#char4-div"));

            $("#char1-div").show();
            $("#char3-div").show();
            $("#char4-div").show();
            console.log(yourCharacter.charAttackPower);

        } else if ($(this).hasClass("char3-div") && !gameOver && !charSelected) {

            charSelected = true;
            yourCharacter = characters.char3;
            charBaseAttackPower = yourCharacter.charAttackPower;
            // charNewAttackPower = charBaseAttackPower;
            $("#characters-available-row").hide();
            // $("#char2-div").hide();
            // $("#char3-div").hide();
            // $("#char4-div").hide();

            $("#char2-div").removeClass("char-image-div-before");
            $("#char2-div").addClass("char-image-div-after enemy");

            $("#char1-div").removeClass("char-image-div-before");
            $("#char1-div").addClass("char-image-div-after enemy");

            $("#char4-div").removeClass("char-image-div-before");
            $("#char4-div").addClass("char-image-div-after enemy");

            $(".your-character").append($("#char3-div"));
            $(".enemies-available-div").append($("#char2-div"));
            $(".enemies-available-div").append($("#char1-div"));
            $(".enemies-available-div").append($("#char4-div"));

            $("#char2-div").show();
            $("#char1-div").show();
            $("#char4-div").show();
            console.log(yourCharacter.charAttackPower);

        } else if ($(this).hasClass("char4-div") && !gameOver && !charSelected) {

            charSelected = true;
            yourCharacter = characters.char4;
            charBaseAttackPower = yourCharacter.charAttackPower;
            // charNewAttackPower = charBaseAttackPower;
            $("#characters-available-row").hide();
            // $("#char2-div").hide();
            // $("#char3-div").hide();
            // $("#char4-div").hide();

            $("#char2-div").removeClass("char-image-div-before");
            $("#char2-div").addClass("char-image-div-after enemy");

            $("#char3-div").removeClass("char-image-div-before");
            $("#char3-div").addClass("char-image-div-after enemy");

            $("#char1-div").removeClass("char-image-div-before");
            $("#char1-div").addClass("char-image-div-after enemy");

            $(".your-character").append($("#char4-div"));
            $(".enemies-available-div").append($("#char2-div"));
            $(".enemies-available-div").append($("#char3-div"));
            $(".enemies-available-div").append($("#char1-div"));

            $("#char2-div").show();
            $("#char3-div").show();
            $("#char1-div").show();
            console.log(yourCharacter.charAttackPower);

        }


        //----------------------------------------------------


        //select enemies one by one until they run out

        if ($(this).hasClass("char1-div") && $(this).hasClass("enemy") && !gameOver && !enemySelected && !enemiesRunOut) {
            //charSelected = true;
            enemySelected = true;
            defender = characters.char1;
            $("#char1-div").hide();
            $("#char1-div").css({ "background-color": "black", "border": "4px solid red", "color": "white" });
            $("#defender").append($("#char1-div"));
            $("#char1-div").show();
            console.log(yourCharacter.charAttackPower);
            startFighting(1);
            count++;



        } else if ($(this).hasClass("char2-div") && $(this).hasClass("enemy") && !gameOver && charSelected && !enemySelected && !enemiesRunOut) {

            enemySelected = true;
            defender = characters.char2;
            $("#char2-div").hide();
            $("#char2-div").css({ "background-color": "black", "border": "4px solid red", "color": "white" });
            $("#defender").append($("#char2-div"));
            $("#char2-div").show();
            console.log(yourCharacter.charAttackPower);
            startFighting(2);
            count++;



        } else if ($(this).hasClass("char3-div") && $(this).hasClass("enemy") && !gameOver && charSelected && !enemySelected && !enemiesRunOut) {

            enemySelected = true;
            defender = characters.char3;
            $("#char3-div").hide();
            $("#char3-div").css({ "background-color": "black", "border": "4px solid red", "color": "white" });
            $("#defender").append($("#char3-div"));
            $("#char3-div").show();
            console.log(yourCharacter.charAttackPower);
            startFighting(3);
            count++;



        } else if ($(this).hasClass("char4-div") && $(this).hasClass("enemy") && !gameOver && charSelected && !enemySelected && !enemiesRunOut) {

            enemySelected = true;
            defender = characters.char4;
            $("#char4-div").hide();
            $("#char4-div").css({ "background-color": "black", "border": "4px solid red", "color": "white" });
            $("#defender").append($("#char4-div"));
            $("#char4-div").show();
            console.log(yourCharacter.charAttackPower);
            startFighting(4);
            count++;


        }



        function startFighting(charNum) {
            $("#fightBtn").on("click", function() {
                console.log(count);
                //char1 is your enemy
                $("#explainationText").html("");
                // if(){

                // }
                if (defender.charHealthPoints <= 0) {
                    if (defender.charName === "char1") {
                        $("#char1-div").hide();
                        enemySelected = false;
                        //charBaseAttackPower = yourCharacter.charAttackPower;
                        $("#explainationText").html("You have defeated char1. You can choose to fight another enemy.");

                    } else if (defender.charName === "char2") {
                        $("#char2-div").hide();
                        enemySelected = false;
                        //charBaseAttackPower = yourCharacter.charAttackPower;
                        $("#explainationText").html("You have defeated char2. You can choose to fight another enemy.");

                    } else if (defender.charName === "char3") {
                        $("#char3-div").hide();
                        enemySelected = false;
                        //charBaseAttackPower = yourCharacter.charAttackPower;
                        $("#explainationText").html("You have defeated char3. You can choose to fight another enemy.");

                    } else {
                        $("#char4-div").hide();
                        enemySelected = false;
                        //charBaseAttackPower = yourCharacter.charAttackPower;
                        $("#explainationText").html("You have defeated char4. You can choose to fight another enemy.");

                    }
                }


                else if ((enemySelected === false) && (defender.charHealthPoints < 0)) {
                    $("#explainationText").html("No enemy here.");
                }

                if (charNum === 1) {
                    
                    console.log(yourCharacter.charAttackPower);
                    if ((yourCharacter.charHealthPoints >= 0) && (defender.charHealthPoints >= 0)) {

                        yourCharacter.charHealthPoints -= defender.charCounterAttackPower;
                        defender.charHealthPoints -= yourCharacter.charAttackPower;


                        $("#char1-hp").text(characters.char1.charHealthPoints);
                        $("#char2-hp").text(characters.char2.charHealthPoints);
                        $("#char3-hp").text(characters.char3.charHealthPoints);
                        $("#char4-hp").text(characters.char4.charHealthPoints);
                        $("#explainationText").text("You attacked " + defender.charName + " for " + yourCharacter.charAttackPower + " damage. " +
                            defender.charName + " attacked you back for " + defender.charCounterAttackPower + " damage.");
                        // charNewAttackPower += charBaseAttackPower;
                        yourCharacter.charAttackPower += charBaseAttackPower;
                    } else {
                        if (yourCharacter.charHealthPoints < 0) {
                            $("#explainationText").html("You been defeated. Game Over");
                            $("#explainationText").append($("<br><button style='color:black' id='restart'>Restart</button>"));
                            $("#restart").on("click", function() {
                                location.reload();
                            });

                        } else {
                            $("#char1-div").hide();
                            enemySelected = false;
                            //charBaseAttackPower = yourCharacter.charAttackPower;
                            $("#explainationText").html("You have defeated char1. You can choose to fight another enemy.");
                        }

                    }
                }
                //char 2 is your enemy
                else if (charNum === 2) {
                    
                    console.log(yourCharacter.charAttackPower);
                    if ((yourCharacter.charHealthPoints > 0) && (defender.charHealthPoints > 0)) {
                        yourCharacter.charHealthPoints -= defender.charCounterAttackPower;
                        // console.log(charBaseAttackPower);
                        // console.log(charNewAttackPower);
                        defender.charHealthPoints -= yourCharacter.charAttackPower;


                        $("#char1-hp").text(characters.char1.charHealthPoints);
                        $("#char2-hp").text(characters.char2.charHealthPoints);
                        $("#char3-hp").text(characters.char3.charHealthPoints);
                        $("#char4-hp").text(characters.char4.charHealthPoints);
 
                        $("#explainationText").text("You attacked " + defender.charName + " for " + yourCharacter.charAttackPower + " damage. " +
                            defender.charName + " attacked you back for " + defender.charCounterAttackPower + " damage.");
                        yourCharacter.charAttackPower += charBaseAttackPower;
                    }
                } else if (charNum === 3) {
                   
                    console.log(yourCharacter.charAttackPower);
                    if ((yourCharacter.charHealthPoints > 0) && (defender.charHealthPoints > 0)) {
                        yourCharacter.charHealthPoints -= defender.charCounterAttackPower;
                        defender.charHealthPoints -= yourCharacter.charAttackPower;

                        $("#char1-hp").text(characters.char1.charHealthPoints);
                        $("#char2-hp").text(characters.char2.charHealthPoints);
                        $("#char3-hp").text(characters.char3.charHealthPoints);
                        $("#char4-hp").text(characters.char4.charHealthPoints);
                        //$("#char3-div").hide();
                        $("#explainationText").text("You attacked " + defender.charName + " for " + yourCharacter.charAttackPower + " damage. " +
                            defender.charName + " attacked you back for " + defender.charCounterAttackPower + " damage.");
                        // console.log(yourCharacter.charHealthPoints);
                        // console.log(defender.charHealthPoints);
                        yourCharacter.charAttackPower += charBaseAttackPower;
                      
                    }
                } else if (charNum === 4) {

                    console.log(yourCharacter.charAttackPower);
                    if ((yourCharacter.charHealthPoints > 0) && (defender.charHealthPoints > 0)) {
                        yourCharacter.charHealthPoints -= defender.charCounterAttackPower;
                        defender.charHealthPoints -= yourCharacter.charAttackPower;

                        $("#char1-hp").text(characters.char1.charHealthPoints);
                        $("#char2-hp").text(characters.char2.charHealthPoints);
                        $("#char3-hp").text(characters.char3.charHealthPoints);
                        $("#char4-hp").text(characters.char4.charHealthPoints);
                        //$("#char4-div").hide();
                        $("#explainationText").text("You attacked " + defender.charName + " for " + yourCharacter.charAttackPower + " damage. " +
                            defender.charName + " attacked you back for " + defender.charCounterAttackPower + " damage. ");

                        // console.log(yourCharacter.charHealthPoints);
                        // console.log(defender.charHealthPoints);
                        yourCharacter.charAttackPower += charBaseAttackPower;
                 

                    }
                }


                //document.getElementById("").innerHTML = numGuesses;
                if (yourCharacter.charHealthPoints < 0) {
                    $("#explainationText").html("You been defeated. Game Over");
                    $("#explainationText").append($("<br><button style='color:black' id='restart'>Restart</button>"));
                    $("#restart").on("click", function() {
                        location.reload();
                    });

                }

                if(count ===3){
                    $("#explainationText").html("You won!!!");
                    $("#explainationText").append($("<br><button style='color:black' id='restart'>Restart</button>"));
                            $("#restart").on("click", function() {
                                location.reload();
                            });
                }

                

            });
     
        }; //end of start fighting function


    });

});
