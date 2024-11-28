//FOR THE SNOWFLAKES EFFECT...
document.addEventListener("DOMContentLoaded", function() {
    const numberOfSnowflakes = 100; 
    const body = document.body;

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄'; 
        snowflake.style.left = Math.random() * 100 + 'vw'; 
        snowflake.style.animationDuration = Math.random() * 10 + 5 + 's'; 
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; 
        body.appendChild(snowflake);
    }
});