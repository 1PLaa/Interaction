function toggleInfo(id) {
  var allInfo = document.querySelectorAll(".speaker-info");
  var current = document.getElementById(id);
  var isOpen = current.classList.contains("is-open");

  allInfo.forEach(function(item) {
    item.classList.remove("is-open");
  });

  if (!isOpen) {
    current.classList.add("is-open");
  }

  document.body.classList.add("flash");
  setTimeout(function () {
    document.body.classList.remove("flash");
  }, 180);
}

document.addEventListener("DOMContentLoaded", function () {
  var triggers = document.querySelectorAll(".trigger");

  triggers.forEach(function(trigger) {
    trigger.addEventListener("click", function() {
      var target = this.getAttribute("data-target");
      toggleInfo(target);
    });
  });
});

document.addEventListener("mousemove", function(e) {
  var guide = document.getElementById("cursorGuide");
  if (guide) {
    guide.style.left = e.clientX + "px";
    guide.style.top = e.clientY + "px";
  }

  document.documentElement.style.setProperty("--mx", e.clientX + "px");
  document.documentElement.style.setProperty("--my", e.clientY + "px");

  var lines = document.querySelectorAll(".line");
  lines.forEach(function(line, i) {
    var offsetX = (e.clientX / window.innerWidth - 0.5) * (4 + i * 0.3);
    var offsetY = (e.clientY / window.innerHeight - 0.5) * (3 + i * 0.2);
    line.style.marginLeft = offsetX + "px";
    line.style.marginTop = offsetY + "px";
  });

  var hotspots = document.querySelectorAll(".hotspot");
  hotspots.forEach(function(spot) {
    var moveX = (e.clientX / window.innerWidth - 0.5) * 6;
    var moveY = (e.clientY / window.innerHeight - 0.5) * 6;
    spot.style.transform = "translate(" + moveX + "px," + moveY + "px)";
  });
});