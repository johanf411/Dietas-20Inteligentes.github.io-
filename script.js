document.addEventListener("DOMContentLoaded", () => {
    const dietIdeas = [
        "Mediterranean diet: includes fruits, vegetables, whole grains, olive oil, and fish.",
        "Low-carb diet: focuses on lean proteins, healthy fats, and non-starchy vegetables.",
        "Intermittent fasting: alternates periods of fasting with eating windows.",
        "DASH diet: rich in fruits, vegetables, whole grains, and low-fat dairy products.",
        "Vegan diet: completely plant-based foods.",
        "Ketogenic diet: high-fat, moderate-protein, and very low-carb meals.",
        "Paleo diet: focuses on unprocessed foods like lean meats, nuts, and vegetables.",
    ];

    const generateButton = document.getElementById("generate-diet");
    const resultDiv = document.getElementById("result");

    generateButton.addEventListener("click", () => {
        const randomIdea = dietIdeas[Math.floor(Math.random() * dietIdeas.length)];
        resultDiv.innerHTML = `<p>${randomIdea}</p>`;
        resultDiv.style.animation = "fadeIn 0.5s ease-in-out";
    });
});