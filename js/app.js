document.addEventListener("DOMContentLoaded", function () {
    // Selecting all necessary elements because the main section was not showing so this was one fix I came up with
    const sections = document.querySelectorAll("main section");
    const buttons = document.querySelectorAll("nav button");
    const galleryContainer = document.querySelector(".gallery-container");
    const testimonialsContainer = document.getElementById("testimonials");
    const profileContainer = document.getElementById("profile");
    const loginForm = document.getElementById("login-form");
    const closeButtons = document.querySelectorAll(".close");

    // Testimonials data with picture and text 
    const testimonialsData = [
        { image: "images/uifaces-profile1.webp", text: "Sounds Scape changed the way I experience music. Meeting like-minded people has been incredible!" },
        { image: "images/uifaces-profile2.webp", text: "I've attended fantastic events and made lifelong friends through Sounds Scape. Highly recommended!" },
        { image: "images/uifaces-profile3.webp", text: "Sounds Scape introduced me to amazing people who love the same music as I do!" },
        { image: "images/uifaces-profile4.webp", text: "I've discovered new music and made great friends through this community." },
        { image: "images/uifaces-profile5.webp", text: "I'm so thankful for this community because I became incredibly social in the best way." },
    ];

    // Gallery data with the image and the city
    const galleryData = [
        { image: "images/event4.webp", city: "Lisbon" },
        { image: "images/event5.webp", city: "Amsterdam" },
        { image: "images/event6.webp", city: "Madrid" },
        { image: "images/event7.webp", city: "Brussels" },
    ];


    // The gallery section with the famous flip effect
    galleryData.forEach((city) => {
        galleryContainer.innerHTML += `
            <div class="flip-container">
                <div class="flipper">
                    <div class="front">
                        <div class="city-img" style="background-image: url('${city.image}')"></div>
                    </div>
                    <div class="back">
                        <p>${city.city}</p>
                    </div>
                </div>
            </div>
        `;
    });

    // Print testimonials
    testimonialsData.forEach((testimonial) => {
        testimonialsContainer.innerHTML += `
            <div class="testimonial">
                <img src="${testimonial.image}" alt="User">
                <p>"${testimonial.text}"</p>
            </div>
        `;
    });

    

    // Logo animation with JS application
    const logo = document.getElementById("logo");
    logo.classList.add("animated-logo");

    // Event listeners for nav buttons, this was one I iterated a lot of times because it wouldn't show all the sections
    const homeButton = document.getElementById('home-btn');
    const loginButton = document.getElementById('login-btn');
    const signupButton = document.getElementById('signup-btn');
    const profileButton = document.getElementById('profile-btn');

    if (homeButton) {
        homeButton.addEventListener('click', () => showSection('home'));
    }

    if (loginButton) {
        loginButton.addEventListener('click', () => showLoginForm('login'));
    }

    if (signupButton) {
        signupButton.addEventListener('click', () => showSection('signup'));
    }

    if (profileButton) {
        profileButton.addEventListener('click', () => showProfile('profile'));
    }

    // Close buttons that I wanted for the pop-ups
    closeButtons.forEach((button) => {
        button.addEventListener('click', () => closeForm());
    });

    // Function to show a specific section, this was my attempt to show sections
    function showSection(sectionId) {
        // First hiding all sections
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Show the selected section that I would like to display
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        }

        // My thought "If the selected section is 'home', additionally show the gallery section" an attempt to show the section
        if (sectionId === 'home') {
            const gallerySection = document.getElementById('gallery');
            if (gallerySection) {
                gallerySection.style.display = 'block';
            }
        }
    }

    // Attempt of function to show the login form
    function showLoginForm() {
        if (loginForm) {
            loginForm.style.display = "block";
        }
    }

    // Attempt of function to close the form
    function closeForm() {
        if (loginForm) {
            loginForm.style.display = "none";
        }
        if (profileContainer) {
            profileContainer.style.display = "none";
        }
    }

    // Attempt of function to show the user's profile
    function showProfile() {
        if (loginForm) {
            loginForm.style.display = "none";
        }

        if (profileContainer) {
            profileContainer.style.display = "block";
            profileContainer.innerHTML = `
                <h2>${profileData.name}'s Profile</h2>
                <div class="profile-info">
                    <div class="profile-img" style="background-image: url('${profileData.image}')"></div>
                    <p>Email: ${profileData.email}</p>
                    <p>Musical Tastes: ${profileData.musicalTastes.join(", ")}</p>
                    <p>Event1: ${profileData.event1}</p>
                    <p>Event2: ${profileData.event2}</p>
                    <p>Event3: ${profileData.event3}</p>
                </div>
                <div class="event-card">
                    <h3>January Events</h3>
                    ${createEventCard("Oscar Anton Live")}
                    ${createEventCard("Jazzy Nights")}
                    ${createEventCard("Karaoke Nights")}
                    <!-- Add more events as needed -->
                </div>
            `;
        }
    }

    // Function to create an event card
    function createEventCard(eventName) {
        return `
            <div class="event">
                <p>${eventName}</p>
                <button onclick="joinEvent(this)">Join</button>
            </div>
        `;
    }

    // Function to simulate joining an event
    function joinEvent(button) {
        button.textContent = "Joined";
        button.disabled = true;
    }

    // Profile's data
    const profileData = {
        name: "Ella",
        image: "images/uifaces-profile4.webp",
        email: "ella@gmail.com",
        musicalTastes: ["Jazz", "Blues", "Rock", "R&B"],
        event1: "Oscar Anton Live",
        event2: "Jazzy Nights",
        event3: "Karaoke Nights",
    };

    // Function to simulate a login
    function simulateLogin() {
        console.log("Simulating login");
    }
});

