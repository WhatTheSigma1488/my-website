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
      }
    });
  });
});

function aztecShowInfo(key) {
  const info = {
    tenochtitlan: {
      title: 'Tenochtitlan',
      text: `The capital of the Aztec Empire, located on an island in Lake Texcoco. Founded in 1325, it quickly became the political, economic, and religious heart of the region. The city was an engineering marvel with canals, bridges, and a system of artificial islands called chinampas. Magnificent temples, royal palaces, and bustling marketplaces filled the cityscape. Tenochtitlan wasn’t just a capital — it was the very pulse of the empire.`
    },
    texcoco: {
      title: 'Texcoco',
      text: `The second most important city in the Aztec Triple Alliance, situated on the eastern shore of Lake Texcoco. Texcoco was renowned for its culture, arts, and intellectual life. It was home to the poet and philosopher Nezahualcoyotl, who left a lasting legacy in Aztec literature and politics. The city was known for its libraries, schools, and innovative legal systems, making it a true cultural hub.`
    },
    tlacopan: {
      title: 'Tlacopan',
      text: `The smallest of the three cities in the Triple Alliance but crucial for its military and trade roles. Located on the western shore of the lake, Tlacopan played a key role in coordinating military campaigns and controlling trade routes. Despite its smaller size, the city was a strategic partner in maintaining the power and stability of the Aztec Empire.`
    },
    tlatelolco: {
      title: 'Tlatelolco',
      text: `The twin city and neighbor of Tenochtitlan, located on the northern part of the island in Lake Texcoco. Famous for its massive market — one of the largest and busiest in all of Mesoamerica. The market attracted traders and buyers from across the empire, buzzing with commerce every day. Tlatelolco was not just an economic powerhouse but also a cultural center with its own festivals and temples.`
    },
    cholula: {
      title: 'Cholula',
      text: `One of the oldest and most sacred cities in Mesoamerica, known for its enormous pyramid — the largest by volume in the world. Cholula was a center for worship and major religious ceremonies. It maintained its spiritual importance even after joining the Aztec Empire, serving as a religious heartland and pilgrimage site for Aztecs and other peoples.`
    },
    teotihuacan: {
      title: 'Teotihuacan',
      text: `Though founded long before the Aztecs and abandoned centuries before their rise, Teotihuacan’s massive pyramids — the Sun, the Moon, and the Temple of the Feathered Serpent — profoundly influenced Aztec culture and religion. The Aztecs revered it as the “City of the Gods.” These monumental structures served not only as worship sites but also as powerful symbols of ancient mystery and greatness.`
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
