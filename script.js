// Data for the Dog Encyclopedia section.
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
