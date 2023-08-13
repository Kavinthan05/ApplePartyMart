
    function scrollToSection() {
      const searchBox = document.getElementById('searchBox');
      const searchTerm = searchBox.value.toLowerCase();
      const sections = document.querySelectorAll('section');
    
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionText = section.innerText.toLowerCase();
    
        if (sectionText.includes(searchTerm)) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          break;
        }
      }}