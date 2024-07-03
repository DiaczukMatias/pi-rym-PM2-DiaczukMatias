document.addEventListener("DOMContentLoaded", () => {
    const movieForm = document.getElementById("movieForm");
    const resetButton = document.getElementById("resetButton");

    const handleReset = () => {
        movieForm.reset();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(movieForm);
        const movieData = Object.fromEntries(formData.entries());

        movieData.genre = movieData.genre.split(',').map(g => g.trim());

        movieData.year = parseInt(movieData.year);
        movieData.rate = parseFloat(movieData.rate); 
        console.log(movieData)

        if (Object.values(movieData).some(value => !value)) {
            alert("Please fill out all fields.");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/movies", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(movieData),
            });

            if (!response.ok) {
                throw new Error("Error creating movie.");
            }

            alert("Movie created successfully!");
            handleReset();
            window.location.href = '../index.html'; 
        } catch (error) {
            console.error("Error:", error);
            alert("Error creating movie.");
        }
    };

    movieForm.addEventListener("submit", handleSubmit);
    resetButton.addEventListener("click", handleReset);
});
