(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-form-open]"),
      closeMenuBtn: document.querySelector("[data-form-close]"),
      menu: document.querySelector("[data-form]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleForm);
    refs.closeMenuBtn.addEventListener("click", toggleForm);
  
    function toggleForm() {
      refs.menu.classList.toggle("is-hidden");
    }
  })();