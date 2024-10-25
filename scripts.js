const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const entries = new FormData(event.target);
  let { dividend, divider } = Object.fromEntries(entries);

  // Validation: Check for missing inputs
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return;
  }

  // Convert inputs to numbers
  dividend = Number(dividend);
  divider = Number(divider);

  // Validation: Check for non-numeric inputs
  if (isNaN(dividend) || isNaN(divider)) {
    console.error("Invalid input: Non-numeric values detected. Call stack:", new Error().stack);
    document.body.innerHTML = `
      <h1>Something critical went wrong. Please reload the page</h1>
    `;
    return;
  }

  // Handle division by zero
  if (divider === 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error("Error: Division by zero. Call stack:", new Error().stack);
    return;
  }

  // Perform the division and display whole number result (no decimals)
  const quotient = Math.floor(dividend / divider);
  result.innerText = quotient;
});

