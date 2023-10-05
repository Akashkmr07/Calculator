document.addEventListener("DOMContentLoaded", function() {
    const inputBox = document.getElementById("inputBox");
    const buttons = document.querySelectorAll("button");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            const buttonText = button.textContent;

            switch (buttonText) {
                case "=":
                    try {
                        inputBox.value = eval(inputBox.value);
                    } catch (error) {
                        inputBox.value = "Error";
                    }
                    break;
                case "AC":
                    inputBox.value = "";
                    break;
                case "DEL":
                    inputBox.value = inputBox.value.slice(0, -1);
                    break;
                case "+/-":
                    inputBox.value = -eval(inputBox.value);
                    break;
                default:
                    inputBox.value += buttonText;
            }
        });
    });
});