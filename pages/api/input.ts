export const inputFocus = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.getElementById("emailInput")?.focus();
  };