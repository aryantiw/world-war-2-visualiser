const events = [
    { year: 1939, description: "World War 2 begins" },
    { year: 1940, description: "Battle of Britain" },
    { year: 1941, description: "Attack on Pearl Harbor" },
    { year: 1942, description: "Battle of Stalingrad" },
    { year: 1944, description: "D-Day" },
    { year: 1945, description: "End of World War 2" }
];

const timeline = document.getElementById("timeline");

events.forEach(event => {
    const eventNode = document.createElement("div");
    eventNode.classList.add("event");
    eventNode.style.left = `${(event.year - 1939) * 40}px`;

    const eventDescription = document.createElement("div");
    eventDescription.classList.add("event-description");
    eventDescription.innerText = event.description;

    const eventYear = document.createElement("div");
    eventYear.classList.add("event-year");
    eventYear.innerText = event.year;

    eventNode.addEventListener("mouseover", () => {
        eventDescription.style.display = "block";
    });

    eventNode.addEventListener("mouseout", () => {
        eventDescription.style.display = "none";
    });

    eventNode.appendChild(eventDescription);
    eventNode.appendChild(eventYear);
    timeline.appendChild(eventNode);
});
