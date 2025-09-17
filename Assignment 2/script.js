const raceSelect = document.getElementById("raceSelect");
const randomBtn = document.getElementById("randomBtn");
const characterArea = document.getElementById("characterArea");

// Fetching characters by race
async function fetchByRace(race) {
  const url = `https://dragonball-api.com/api/characters?race=${encodeURIComponent(
    race
  )}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.length > 0) {
      const randomChar = data[Math.floor(Math.random() * data.length)];
      showCharacter(randomChar);
    } else {
      characterArea.innerHTML = `<p>No characters found for race: ${race}</p>`;
    }
  } catch (err) {
    console.error(err);
    characterArea.innerHTML = "<p>Failed to fetch characters.</p>";
  }
}

// Showing character in a card
function showCharacter(char) {
  characterArea.innerHTML = `
    <div class="card">
      <img src="${char.image}" alt="${char.name}">
      <div class="content">
        <h2>${char.name}</h2>
        <p><strong>Race:</strong> ${char.race}</p>
        <p><strong>Affiliation:</strong> ${char.affiliation}</p>
        <p><strong>Base Ki:</strong> ${char.ki}</p>
        <p><strong>Max Ki:</strong> ${char.maxKi}</p>
      </div>
    </div>
  `;
}

randomBtn.addEventListener("click", () => {
  const race = raceSelect.value;
  if (race) {
    fetchByRace(race);
  } else {
    characterArea.innerHTML = "<p>Please select a race first.</p>";
  }
});
