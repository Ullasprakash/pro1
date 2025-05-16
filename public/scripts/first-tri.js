const weekData = [
      "Week 1–2: Body preparing for pregnancy.",
      "Week 3: Conception may occur.",
      "Week 4: Implantation happens. Missed period.",
      "Week 5: Hormones increase, nausea may begin.",
      "Week 6: Baby's heart starts beating.",
      "Week 7: Facial features forming.",
      "Week 8: Arms and legs start growing.",
      "Week 9: Baby about the size of a grape.",
      "Week 10: Organs begin to function.",
      "Week 11: Baby can move inside the womb.",
      "Week 12: First trimester ends. Risk of miscarriage drops.",
    ];

    const weekTracker = document.getElementById("weekTracker");
    const weekDetails = document.getElementById("weekDetails");

    weekData.forEach((text, i) => {
      const btn = document.createElement("button");
      btn.textContent = `Week ${i + 1}`;
      btn.onclick = () => highlightWeek(i);
      weekTracker.appendChild(btn);

      const div = document.createElement("div");
      div.className = "week";
      div.id = `week${i}`;
      div.innerHTML = `<strong>Week ${i + 1}</strong><br>${text}`;
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