const convertButton = document.getElementById("convertButton");
const resultsArea = document.getElementById("resultsArea");

convertButton.addEventListener("click", async () => {
  const amount = document.getElementById("amountInput").value;
  const source = document.getElementById("sourceInput").value.toLowerCase();
  const targets = document
    .getElementById("targetsInput")
    .value.split(",")
    .map((t) => t.trim().toLowerCase());

  if (!amount || !source || targets.length === 0) {
    resultsArea.innerHTML = "<p>Please fill in all fields.</p>";
    return;
  }

  try {
    const response = await fetch(
      "https://api.apyhub.com/data/convert/currency/multiple",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apy-token":
            "APY0eUIXpacoUFd87whuJ5oEZli8IXsS3mESQIYhkorkp5zafzfAzAET1wtISdoC4",
        },
        body: JSON.stringify({
          source: source,
          targets: targets,
        }),
      }
    );

    console.log("Response status:", response.status);
    const data = await response.json();
    console.log("Response JSON:", data);

    console.log(data);

    // Show results in cards
    resultsArea.innerHTML = "";
    targets.forEach((target) => {
      const rateKey = `${source}_${target}`;
      if (data[rateKey]) {
        const converted = (amount * data[rateKey]).toFixed(2);

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <h2>${source.toUpperCase()} → ${target.toUpperCase()}</h2>
          <p>1 ${source.toUpperCase()} = ${
          data[rateKey]
        } ${target.toUpperCase()}</p>
          <p>${amount} ${source.toUpperCase()} = <strong>${converted} ${target.toUpperCase()}</strong></p>
          <div class="points">⭐ Guess the rate next time!</div>
        `;
        resultsArea.appendChild(card);
      }
    });
  } catch (err) {
    console.error(err);
    resultsArea.innerHTML =
      "<p>Failed to fetch data. Check API key or inputs.</p>";
  }
});
