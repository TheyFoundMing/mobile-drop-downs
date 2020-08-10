const initialSetup = (function () {
  function initialRender() {
    let tabs = document.querySelectorAll(".active");

    let eventSelect = (e) => {
      reset();
      current(e);
    };

    for (let i = 0; i < tabs.length; i++) {
      let tab = tabs[i];
      tab.addEventListener("click", eventSelect);
    }
  }

  function current(e) {
    let tab = e.target.parentNode;
    let line = tab.querySelector(".line");
    line.classList.add("current");
  }

  function reset() {
    let lines = document.querySelectorAll(".line");

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      line.classList.remove("current");
    }
  }

  return { initialRender };
})();

initialSetup.initialRender();
