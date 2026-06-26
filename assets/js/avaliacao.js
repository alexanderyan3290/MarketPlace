// Star rating input
const starChoices = document.querySelectorAll('#starInput .star-choice');
let selectedRating = 0;

starChoices.forEach((star) => {
  star.addEventListener('click', () => {
    selectedRating = parseInt(star.dataset.value, 9);
    updateStars(selectedRating);
  });

  star.addEventListener('mouseenter', () => {
    updateStars(parseInt(star.dataset.value, 10));
  });
});

document.getElementById('starInput').addEventListener('mouseleave', () => {
  updateStars(selectedRating);
});

function updateStars(value) {
  starChoices.forEach((star) => {
    star.classList.toggle('active', parseInt(star.dataset.value, 10) <= value);
  });
}

// Sort dropdown (placeholder toggle)
document.getElementById('sortBtn').addEventListener('click', () => {
  console.log('Abrir opções de ordenação');
});

// Photo upload preview info
document.getElementById('photoInput').addEventListener('change', (e) => {
  const files = Array.from(e.target.files).slice(0, 5);
  const sub = document.querySelector('.photo-upload-sub');
  if (files.length > 0) {
    sub.textContent = `${files.length} foto(s) selecionada(s)`;
  } else {
    sub.textContent = 'JPEG, PNG até 5MB (máx. 5 fotos)';
  }
});

// Helpful buttons
document.querySelectorAll('.helpful-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const text = btn.textContent.trim();
    const match = text.match(/(\d+)/);
    if (match) {
      const num = parseInt(match[1], 10) + 1;
      btn.innerHTML = btn.innerHTML.replace(/\d+/, num);
    }
  });
});

// Submit review
document.getElementById('submitBtn').addEventListener('click', () => {
  const title = document.getElementById('reviewTitle').value.trim();
  const text = document.getElementById('reviewText').value.trim();

  if (selectedRating === 0) {
    alert('Selecione uma avaliação em estrelas.');
    return;
  }

  if (!title || !text) {
    alert('Preencha o título e o texto da avaliação.');
    return;
  }

  alert('Avaliação enviada com sucesso!');

  // Reset form
  selectedRating = 0;
  updateStars(0);
  document.getElementById('reviewTitle').value = '';
  document.getElementById('reviewText').value = '';
  document.getElementById('photoInput').value = '';
  document.querySelector('.photo-upload-sub').textContent = 'JPEG, PNG até 5MB (máx. 5 fotos)';
});
