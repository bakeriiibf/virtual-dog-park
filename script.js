// ---------------------------------------------------------------
// Dog Encyclopedia
// ---------------------------------------------------------------
const breeds = [
  {
    name: "Beagle",
    image: "assets/beagle.svg",
    alt: "Illustration of a Beagle",
    size: "Small to medium, about 10-15 kg.",
    personality: "Curious, friendly, and very food-motivated.",
    care: "Daily walks, a secure garden, and weekly brushing."
  },
  {
    name: "Golden Retriever",
    image: "assets/golden-retriever.svg",
    alt: "Illustration of a Golden Retriever",
    size: "Large, about 25-34 kg.",
    personality: "Gentle, patient, and eager to please.",
    care: "Long walks, regular brushing, and plenty of play time."
  },
  {
    name: "Poodle",
    image: "assets/poodle.svg",
    alt: "Illustration of a Poodle",
    size: "Small to large, depending on the variety.",
    personality: "Smart, lively, and easy to train.",
    care: "Frequent grooming and daily mental stimulation."
  }
];

const grid = document.getElementById("dog-grid");

breeds.forEach((dog) => {
  const card = document.createElement("article");
  card.className = "dog-card";
  card.innerHTML = `
    <img src="${dog.image}" alt="${dog.alt}" width="160" height="160" />
    <h3>${dog.name}</h3>
    <dl>
      <dt>Size</dt><dd>${dog.size}</dd>
      <dt>Personality</dt><dd>${dog.personality}</dd>
      <dt>Everyday care</dt><dd>${dog.care}</dd>
    </dl>
  `;
  grid.appendChild(card);
});

// ---------------------------------------------------------------
// My Virtual Dog
// ---------------------------------------------------------------
const MAX_NAME_LENGTH = 20;
const HAPPINESS_STEP = 10;
const HAPPINESS_MAX = 100;

const adoptForm = document.getElementById("adopt-form");
const nameInput = document.getElementById("dog-name");
const breedSelect = document.getElementById("dog-breed");
const formMessage = document.getElementById("form-message");
const dogDisplay = document.getElementById("dog-display");

const displayName = document.getElementById("dog-display-name");
const displayBreed = document.getElementById("dog-display-breed");
const displayDay = document.getElementById("dog-display-day");
const displayStage = document.getElementById("dog-display-stage");
const displayHappiness = document.getElementById("dog-display-happiness");

let currentDog = null;

// Creates a brand new dog with the starting values.
function createDog(name, breed) {
  return {
    name: name,
    breed: breed,
    day: 1,
    stage: "Puppy",
    happiness: 50
  };
}

// Checks the name and returns either an error message or a cleaned name.
function validateName(rawName) {
  const trimmed = rawName.trim();

  if (trimmed === "") {
    return { ok: false, message: "Please enter a dog name." };
  }

  if (trimmed.length > MAX_NAME_LENGTH) {
    return {
      ok: false,
      message: "The name must be " + MAX_NAME_LENGTH + " characters or fewer."
    };
  }

  return { ok: true, name: trimmed };
}

// Writes the dog's details into the page using textContent, never innerHTML.
function renderDog(dog) {
  dogDisplay.hidden = false;
  displayName.textContent = dog.name;
  displayBreed.textContent = dog.breed;
  displayDay.textContent = String(dog.day);
  displayStage.textContent = dog.stage;
  displayHappiness.textContent = String(dog.happiness);
}

// Raises happiness by amount but never above the maximum.
function changeHappiness(amount) {
  if (!currentDog) {
    return;
  }

  currentDog.happiness = Math.min(HAPPINESS_MAX, currentDog.happiness + amount);
  renderDog(currentDog);
}

// Handles the Adopt button.
adoptForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const result = validateName(nameInput.value);

  if (!result.ok) {
    formMessage.textContent = result.message;
    return;
  }

  formMessage.textContent = "";
  currentDog = createDog(result.name, breedSelect.value);
  renderDog(currentDog);
});

document.getElementById("feed-btn").addEventListener("click", () => {
  changeHappiness(HAPPINESS_STEP);
});

document.getElementById("play-btn").addEventListener("click", () => {
  changeHappiness(HAPPINESS_STEP);
});
