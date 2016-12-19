    const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('input', handleUpdate));

const waldo = document.querySelector('.right-side');

waldo.addEventListener('click', resetValues);

function resetValues() {
  inputs.forEach(input => {
    console.log(input.type);
    if (input.type === 'range') {
      input.value = 0;
      document.documentElement.style.setProperty(`--${input.name}`, '0');
    }
    else {
      input.value = '#368DDA';
      document.documentElement.style.setProperty(`--${input.name}`, '#368DDA');
    }
  });
}