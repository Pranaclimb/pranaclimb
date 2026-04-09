// OceanDips static site script

function init() {
  const button = document.querySelector('.cta-button');
  if (button) {
    button.addEventListener('click', () => {
      console.log('Ready for the next dip!');
    });
  }
}

window.addEventListener('DOMContentLoaded', init);
