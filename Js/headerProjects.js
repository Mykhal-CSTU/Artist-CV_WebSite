document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');
  const headerText = header.querySelector('.initials-p');
  const headerTextName = header.querySelector('.name');
  const headerTextLinkActive = header.querySelector('.active');

  // tabs
  const headerTextLinkAbout = header.querySelector('.linkAbout');
  const headerTextLinkResume = header.querySelector('.linkResume');
  const headerTextLinkProjects = header.querySelector('.linkProjects');
  const headerTextLinkContact = header.querySelector('.contactPage')

  window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
          header.style.backgroundColor = 'rgba(43, 43, 43, 0.9)';
          header.style.backdropFilter = 'blur(12px)';
          headerText.style.color = 'white';
          headerTextName.style.color = "white";
          headerTextLinkActive.style.color = "rgb(73, 128, 228)";
          // tabs
          headerTextLinkAbout.style.color = "white";
          headerTextLinkResume.style.color = "white";
          //headerTextLinkProjects.style.color = "white";
          headerTextLinkContact.style.color = "white";
      } else {
          header.style.backgroundColor = 'rgb(255, 255, 255)';
          header.style.backdropFilter = 'none';
          headerText.style.color = 'black';
          headerTextName.style.color = "black";
          headerTextLinkActive.style.color = "rgba(0, 0, 255, 0.8)";
          //tabs
          headerTextLinkAbout.style.color = "black";
          headerTextLinkResume.style.color = "black";
          //headerTextLinkProjects.style.color = "black";
          headerTextLinkContact.style.color = "black";
      }
  });
});