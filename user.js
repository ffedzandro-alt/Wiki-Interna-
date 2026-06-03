document.addEventListener("DOMContentLoaded", function () {
  var button = document.createElement("button");
  button.className = "wiki-menu-button";
  button.type = "button";
  button.innerHTML = "☰";
  button.setAttribute("aria-label", "Abrir menu");

  var header = document.querySelector(".container-header");
  var brandCell = header && header.querySelector(".navbar-brand");
  var insertBefore = brandCell && brandCell.closest(".grid-child");

  if (header && insertBefore) {
    header.insertBefore(button, insertBefore);
  } else if (header) {
    header.prepend(button);
  } else {
    document.body.appendChild(button);
  }

  button.addEventListener("click", function () {
    document.body.classList.toggle("wiki-menu-open");
  });

  document.addEventListener("click", function (event) {
    var sidebar = document.querySelector(".container-sidebar-left");

    if (!document.body.classList.contains("wiki-menu-open")) {
      return;
    }

    if (
      sidebar &&
      !sidebar.contains(event.target) &&
      !button.contains(event.target)
    ) {
      document.body.classList.remove("wiki-menu-open");
    }
  });
});
