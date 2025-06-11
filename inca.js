document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('header.top-nav a');
  const sections = Array.from(links).map(link => {
    const id = link.getAttribute('href').slice(1);
    return document.getElementById(id);
  });

  // Плавний скрол при кліку
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Підсвітка активної кнопки при прокрутці
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight / 3;

    sections.forEach((section, index) => {
      if (
        section.offsetTop <= scrollPos &&
        (index === sections.length - 1 || sections[index + 1].offsetTop > scrollPos)
      ) {
        links.forEach(link => link.classList.remove('active'));
        links[index].classList.add('active');

          const points = document.querySelectorAll('.inca-map-point');
  points.forEach(point => {
    point.style.cursor = 'pointer'; // щоб було видно, що клікабельно
    point.addEventListener('click', () => {
      const key = point.getAttribute('title');
      aztecShowInfo(key);
    });
      }   )}              
    });
    });
    // Додати обробник подій для кожної точки на карті
    const points = document.querySelectorAll('.inca-map-point');
    points.forEach(point => {
        point.style.cursor = 'pointer'; // щоб було видно, що клікабельно
        point.addEventListener('click', () => {
            const key = point.getAttribute('title');
            aztecShowInfo(key);
        });
    });
    });

function aztecShowInfo(key) {
  const info = {
    Cusco: {
      title: 'Cusco',
      text: `The heart of the Inca Empire, Cusco served as its political, spiritual, and cultural capital. Located high in the Peruvian Andes, it was designed in the shape of a puma and featured intricate stonework, temples, and royal palaces. The city was connected to all major regions through an extensive road system.`
    },
    MachuPicchu: {
      title: 'Machu Picchu',
      text: `Nestled on a mountain ridge at 2,430 meters above sea level, Machu Picchu is the most iconic surviving Inca site. Likely built as a royal retreat, it remains an architectural marvel with precisely cut stones, agricultural terraces, and stunning panoramic views.`
    },
    Ollantaytambo: {
      title: 'Ollantaytambo',
      text: `A strategic military, religious, and agricultural center, Ollantaytambo is located in the Sacred Valley. It features massive terraces climbing steep hillsides and a fortress that once resisted Spanish conquest. The city's planning reflects Inca mastery of urban design.`
    },
    Choquequirao: {
      title: 'Choquequirao',
      text: `Often called the “sister city” of Machu Picchu, Choquequirao sits on a high mountain plateau surrounded by jungle. Less visited and more remote, it contains ceremonial plazas, terraced slopes, and impressive water channels.`
    },
    Vilcashuamán: {
      title: 'Vilcashuamán',
      text: `Once an administrative center, Vilcashuamán combines Inca and colonial architecture. Located in present-day Ayacucho, it held religious significance and featured a large temple complex and sun temple built upon a stepped pyramid.`
    }
  };

  const panel = document.getElementById("aztecInfoPanel");
  const city = info[key];

  if (city) {
    panel.innerHTML = `
      <h2>${city.title}</h2>
      <p>${city.text}</p>
    `;
  }
}
