function appendToDisplay(value) {
    document.calc.display.value += value;
  }

  function clearDisplay() {
    document.calc.display.value = '';
  }

  function deleteLast() {
    document.calc.display.value = document.calc.display.value.slice(0, -1);
  }

  function calculate() {
    try {
      document.calc.display.value = eval(document.calc.display.value);
    } catch {
      document.calc.display.value = 'Error';
    }
  }

  function toggleTheme() {
    const body = document.body;
    const button = document.getElementById("themeToggle");

    // Toggle the theme class
    body.classList.toggle("light-mode");

    // Change button text
    if (body.classList.contains("light-mode")) {
      button.value = "Dark"; // Show "Dark" when in light mode
    } else {
      button.value = "Light"; // Show "Light" when in dark mode
    }
  }