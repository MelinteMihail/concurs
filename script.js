const correctAnswers = {
    html: {
        q1: 'a', q2: 'a', q3: 'a', q4: 'b', q5: 'a', 
        q6: 'a', q7: 'b', q8: 'a', q9: 'a', q10: 'a'
    },
    css: {
        q1: 'c', q2: 'b', q3: 'a', q4: 'a', q5: 'a', 
        q6: 'd', q7: 'c', q8: 'b', q9: 'c', q10: 'd'
    },
    flex: {
        q1: 'b', q2: 'a', q3: 'd', q4: 'a', q5: 'a', 
        q6: 'a', q7: 'b', q8: 'b', q9: 'b', q10: 'a'
    },
    js: {
        q1: 'a', q2: 'a', q3: 'a', q4: 'c', q5: 'a', 
        q6: 'b', q7: 'b', q8: 'b', q9: 'a', q10: 'b'
    }
};

const userAnswers = {
    html: {},
    css: {},
    flex: {},
    js: {}
};

let htmlBtn, cssBtn, flexBtn, jsBtn;

document.addEventListener('DOMContentLoaded', function() {

    htmlBtn = document.querySelector(".html-btn");
    cssBtn = document.querySelector(".css-btn");
    flexBtn = document.querySelector(".flex-btn");
    jsBtn = document.querySelector(".js-btn");

    document.querySelectorAll("input[type=radio]").forEach(input => {
        input.addEventListener("change", (event) => {
            const questionName = event.target.name;
            const selectedValue = event.target.value;
            
            if (input.classList.contains("html")) {
                userAnswers.html[questionName] = selectedValue;
            } else if (input.classList.contains("css")) {
                userAnswers.css[questionName] = selectedValue;
            } else if (input.classList.contains("flex")) {
                userAnswers.flex[questionName] = selectedValue;
            } else if (input.classList.contains("js")) {
                userAnswers.js[questionName] = selectedValue;
            }
        });
    });

    function calculateScore(category) {
        let correctCount = 0;
        const userCategoryAnswers = userAnswers[category];
        const correctCategoryAnswers = correctAnswers[category];
        
        for (let question in correctCategoryAnswers) {
            if (userCategoryAnswers[question] === correctCategoryAnswers[question]) {
                correctCount++;
            }
        }
        
        return correctCount;
    }

    function hasAllAnswers(category) {
        const userCategoryAnswers = userAnswers[category];
        const requiredQuestions = Object.keys(correctAnswers[category]);
        return requiredQuestions.every(question => userCategoryAnswers[question]);
    }

    function displayResult(button, score, total) {
        let resultDiv = button.parentElement.querySelector('.result');
        if (!resultDiv) {
            resultDiv = document.createElement('div');
            resultDiv.className = 'result';
            button.parentElement.appendChild(resultDiv);
        }
        resultDiv.textContent = `Ai luat ${score}/${total}!`;
    }

    if (htmlBtn) {
        htmlBtn.addEventListener("click", () => {
            if (hasAllAnswers('html')) {
                const score = calculateScore('html');
                const total = Object.keys(correctAnswers.html).length;
                displayResult(htmlBtn, score, total);
            }
        });
    }

    if (cssBtn) {
        cssBtn.addEventListener("click", () => {
            if (hasAllAnswers('css')) {
                const score = calculateScore('css');
                const total = Object.keys(correctAnswers.css).length;
                displayResult(cssBtn, score, total);
            }
        });
    }

    if (flexBtn) {
        flexBtn.addEventListener("click", () => {
            if (hasAllAnswers('flex')) {
                const score = calculateScore('flex');
                const total = Object.keys(correctAnswers.flex).length;
                displayResult(flexBtn, score, total);
            }
        });
    }

    if (jsBtn) {
        jsBtn.addEventListener("click", () => {
            if (hasAllAnswers('js')) {
                const score = calculateScore('js');
                const total = Object.keys(correctAnswers.js).length;
                displayResult(jsBtn, score, total);
            }
        });
    }

});



