 const weekData = [
      "Week 13: Welcome to the second trimester! Energy levels may rise.",
      "Week 14: Baby's facial expressions begin developing.",
      "Week 15: Bones are hardening, and baby can sense light.",
      "Week 16: You may feel baby’s first kicks soon!",
      "Week 17: Fat is forming to help regulate body temp.",
      "Week 18: Baby can hear sounds now.",
      "Week 19: Vernix (a protective coating) forms on baby’s skin.",
      "Week 20: Mid-pregnancy ultrasound often happens now.",
      "Week 21: Baby’s digestive system is developing.",
      "Week 22: Baby may start reacting to sounds.",
      "Week 23: Skin is wrinkly but developing fast.",
      "Week 24: Baby’s lungs are growing and developing.",
      "Week 25: Hair and fingerprints begin to appear.",
      "Week 26: Eyes start opening, breathing practice starts.",
      "Week 27: End of second trimester. Baby is more active!"
    ];

    const weekTracker = document.getElementById("weekTracker");
    const weekDetails = document.getElementById("weekDetails");

    weekData.forEach((text, i) => {
      const btn = document.createElement("button");
      btn.textContent = `Week ${i + 13}`;
      btn.onclick = () => highlightWeek(i);
      weekTracker.appendChild(btn);

      const div = document.createElement("div");
      div.className = "week";
      div.id = `week${i}`;
      div.innerHTML = `<strong>Week ${i + 13}</strong><br>${text}`;
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