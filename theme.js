// Author: Syed Adnan Haider
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    let count = 0;
    document.querySelectorAll('[data-filter]').forEach(control => control.setAttribute('aria-pressed', String(control === button)));
    document.querySelectorAll('.paper[data-category]').forEach(paper => {
      paper.hidden = category !== 'all' && paper.dataset.category !== category;
      if (!paper.hidden) count += 1;
    });
    document.getElementById('paper-count').textContent = `${count} selected papers`;
  });
});
