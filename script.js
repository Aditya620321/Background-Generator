const color1Input = document.getElementById('color1');
const color2Input = document.getElementById('color2');
const gradientTypeSelect = document.getElementById('gradient-type');
const preview = document.getElementById('preview');

function setGradient() {
  const color1 = color1Input.value;
  const color2 = color2Input.value;
  const gradientType = gradientTypeSelect.value;

  const gradient = `${gradientType}-gradient(${color1}, ${color2})`;
  preview.style.background = gradient;
}

color1Input.addEventListener('input', setGradient);
color2Input.addEventListener('input', setGradient);
gradientTypeSelect.addEventListener('change', setGradient);

// Initial call to set default gradient
setGradient();
