document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".hero_text"); 
    const text = textElement.textContent; 
    textElement.textContent = ""; 

    setTimeout(() => {
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                textElement.textContent += text[i]; 
                i++;
                setTimeout(typeWriter, 15); 
            } else {
                textElement.style.borderRight = "none"; 
            }
        }

        typeWriter();
    }, 1000); 
});
