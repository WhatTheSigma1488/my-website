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

function mayaShowInfo(cityKey) {
  const mayaCitiesInfo = {
    tikal: {
      title: 'Tikal',
      text: `Tikal, located in the Petén Basin of northern Guatemala, was one of the most powerful kingdoms of the ancient Maya. Surrounded by dense rainforests and wetlands, its strategic location provided natural defense and abundant resources. The city's monumental architecture, including towering pyramids and expansive plazas, reflects its significance as a political, economic, and military hub during the Classic Period. Tikal's influence extended across the Maya region, and its alliance with Teotihuacan played a pivotal role in its rise to prominence.`
    },
    copan: {
      title: 'Copán',
      text: `Copán, situated in a fertile valley in present-day Honduras, was renowned for its artistic achievements and intricate stone carvings. The city's location near river valleys and rolling hills supported prosperous agriculture and trade. Copán's hieroglyphic stairway and detailed stelae provide invaluable insights into Maya history and dynastic lineage. Its cultural and scientific advancements, particularly in astronomy and calendar systems, underscore its importance in the Maya civilization.`
    },
    palenque: {
      title: 'Palenque',
      text: `Nestled in the foothills of the Chiapas mountains in southern Mexico, Palenque is celebrated for its architectural elegance and detailed inscriptions. The city's proximity to rivers and waterfalls contributed to its lush environment and agricultural success. Palenque's temples and palaces, such as the Temple of the Inscriptions, showcase the Maya's architectural ingenuity and their deep connection to cosmology and mythology.`
    },
    chichen_itza: {
      title: 'Chichén Itzá',
      text: `Chichén Itzá, located on the Yucatán Peninsula, was a major focal point in the Northern Maya Lowlands. The city's strategic position allowed it to become a melting pot of Maya and Toltec cultures, evident in its diverse architectural styles. Notable structures like El Castillo (Temple of Kukulcán) and the Great Ball Court highlight its ceremonial significance. The nearby cenotes provided essential water sources and held spiritual importance, reinforcing Chichén Itzá's role as both a religious and economic center.`
    },
    calakmul: {
      title: 'Calakmul',
      text: `Deep within the jungles of Campeche, Mexico, Calakmul was one of the largest and most influential Maya cities. Its remote location offered natural protection and access to abundant resources. Calakmul's rivalry with Tikal shaped much of the political landscape of the Classic Period. The city's vast complex of pyramids, stelae, and residential structures reflects its status as a dominant power in the Maya lowlands.`
    },
    uxmal: {
      title: 'Uxmal',
      text: `Uxmal, in the Puuc region of the Yucatán Peninsula, is renowned for its ornate architecture and intricate stone mosaics. The city's name, meaning "thrice-built," hints at its complex construction history. Uxmal's structures, such as the Pyramid of the Magician and the Governor's Palace, exemplify the Puuc architectural style, characterized by smooth walls and decorative friezes. The city's advanced water management systems highlight the Maya's adaptability to the region's arid conditions.`
    },
    bonampak: {
      title: 'Bonampak',
      text: `Bonampak, located in the Lacandon Jungle of Chiapas, Mexico, is famed for its vivid murals that provide a window into Maya court life and rituals. The city's name means "Painted Walls," a testament to the detailed frescoes found within the Temple of the Murals. These artworks depict scenes of warfare, ceremonies, and daily life, offering invaluable insights into the social and political dynamics of the time.`
    },
    yaxchilan: {
      title: 'Yaxchilán',
      text: `Situated along the banks of the Usumacinta River in Chiapas, Mexico, Yaxchilán was a prominent Maya city known for its impressive stone lintels and stelae. The city's location provided strategic control over river trade routes and natural defenses. Yaxchilán's inscriptions detail dynastic histories, alliances, and rituals, emphasizing its role as a significant political and ceremonial center in the Maya world.`
    }
  };

  const infoPanel = document.getElementById('mayaInfoPanel');
  const city = mayaCitiesInfo[cityKey];

  if (!city) return;

  infoPanel.innerHTML = `
    <h2 style="color: gold; font-size: 2rem; font-family: 'Georgia', serif;">${city.title}</h2>
    <p style="font-family: 'Cormorant Garamond', serif; font-size: 2rem; line-height: 1.5;">${city.text.replace(/\n/g, '</p><p>')}</p>
  `;
}
