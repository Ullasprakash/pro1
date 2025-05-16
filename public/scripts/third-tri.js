const weekData = [
      "Week 28: Baby’s eyes open and blink; brain is developing rapidly.",
      "Week 29: Muscles and lungs are maturing.",
      "Week 30: Baby’s kicks may be more noticeable.",
      "Week 31: Growth continues, baby is gaining fat.",
      "Week 32: Baby’s bones are fully formed but still soft.",
      "Week 33: Baby starts to position head-down.",
      "Week 34: Fingernails and toenails are fully formed.",
      "Week 35: Baby’s kidneys are fully developed.",
      "Week 36: Baby may drop lower in the pelvis.",
      "Week 37: Considered early term — baby’s lungs nearly mature.",
      "Week 38: Baby gaining weight rapidly — about an ounce a day!",
      "Week 39: Baby is full term, ready for birth anytime.",
      "Week 40: Due date! Baby is now about 7–8 lbs on average."
    ];

    const weekTracker = document.getElementById("weekTracker");
    const weekDetails = document.getElementById("weekDetails");

    weekData.forEach((text, i) => {
      const btn = document.createElement("button");
      btn.textContent = `Week ${i + 28}`;
      btn.onclick = () => highlightWeek(i);
      weekTracker.appendChild(btn);

      const div = document.createElement("div");
      div.className = "week";
      div.id = `week${i}`;
      div.innerHTML = `<strong>Week ${i + 28}</strong><br>${text}`;
      weekDetails.appendChild(div);
    });

    function highlightWeek(index) {
      document.querySelectorAll(".tracker button").forEach(btn => btn.classList.remove("active"));
      document.querySelectorAll(".tracker button")[index].classList.add("active");
      document.querySelector(`#week${index}`).scrollIntoView({ behavior: "smooth", block: "center" });
    }

    document.querySelectorAll(".faq-question").forEach((q) => {
      q.addEventListener("click", () => {
        const ans = q.nextElementSibling;
        ans.style.display = ans.style.display === "block" ? "none" : "block";
      });
    });