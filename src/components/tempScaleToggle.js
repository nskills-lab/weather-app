class TempScale {
  updateToggle(selectedTempScale) {
    const scaleBtns = document.querySelectorAll('[data-temp-scale]')
    scaleBtns.forEach((btn) => {
      if (btn.dataset.tempScale === selectedTempScale) {
        const classes = [...btn.classList]
        if (classes.includes('off')) {
          btn.classList.remove('off')
        }
      } else {
        const classes = [...btn.classList]
        if (!classes.includes('off')) {
          btn.classList.toggle('off')
        }
      }
    })
  }
}

export const tempScale = new TempScale()
