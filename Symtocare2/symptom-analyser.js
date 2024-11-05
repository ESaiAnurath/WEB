let currentStep = 0;
const steps = document.querySelectorAll(".question-step");

function nextStep() {
    steps[currentStep].classList.remove("active-step");
    currentStep++;
    if (currentStep < steps.length) {
        steps[currentStep].classList.add("active-step");
    }
}

function getResults() {
    const symptoms = Array.from(document.querySelectorAll('input[name="symptom"]:checked'))
                          .map(input => input.value);
    
    let condition;
    if (symptoms.includes("fever") && symptoms.includes("cough") && symptoms.includes("fatigue")) {
        condition = "Flu or common cold";
    } else if (symptoms.includes("chest pain") && symptoms.includes("shortness of breath")) {
        condition = "Possible heart condition. Consult a doctor immediately.";
    } else if (symptoms.includes("loss of smell") && symptoms.includes("headache")) {
        condition = "COVID-19 or sinus infection";
    } else {
        condition = "No specific condition detected. Please consult a healthcare provider.";
    }
    
    document.getElementById("condition-result").textContent = condition;
    document.getElementById("results").classList.remove("hidden");
}

function resetQuestionnaire() {
    document.getElementById("results").classList.add("hidden");
    steps[currentStep].classList.remove("active-step");
    currentStep = 0;
    steps[currentStep].classList.add("active-step");

    document.querySelectorAll('input[name="symptom"]').forEach(input => input.checked = false);
}