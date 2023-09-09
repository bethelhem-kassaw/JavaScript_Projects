
          fetch('heroSection.html')
          .then(response => response.text())
          .then(content => {
            const includedContentDiv = document.getElementById('heroSection');
            includedContentDiv.innerHTML = content;
          });
          
          fetch('category.html')
          .then(response => response.text())
          .then(content => {
            const includedContentDiv = document.getElementById('category');
            includedContentDiv.innerHTML = content;
          });
          fetch('products.html')
          .then(response => response.text())
          .then(content => {
            const includedContentDiv = document.getElementById('products');
            includedContentDiv.innerHTML = content;
          });

          
          document.addEventListener('DOMContentLoaded', function () {
            const sidebar = document.querySelector('#sidebarContent');
            const sidebarClosedContent = document.querySelector('#sidebarClosedContent');
            const sidebarOpenContent = document.querySelector('#sidebarOpenContent');
            const openButton = document.querySelector('#openButton');
            const closeButton = document.querySelector('#closeButton');
          
            // Check if the required elements exist
            if (!sidebar || !sidebarClosedContent || !sidebarOpenContent || !openButton || !closeButton) {
              console.error('One or more required elements not found.');
              return;
            }
          
            // Check if the sidebar state is stored in local storage
            const sidebarState = localStorage.getItem('sidebarState');
            if (sidebarState === 'open') {
              openSidebar();
            } else {
              closeSidebar();
            }
          
            function openSidebar() {
              sidebar.style.width = '16rem'; // Adjust the desired wider width here
              sidebarClosedContent.style.display = 'none';
              sidebarOpenContent.style.display = 'block';
              localStorage.setItem('sidebarState', 'open');
            }
          
            function closeSidebar() {
              sidebar.style.width = '4rem'; // Adjust the desired smaller width here
              sidebarOpenContent.style.display = 'none';
              sidebarClosedContent.style.display = 'block';
              localStorage.setItem('sidebarState', 'closed');
            }
          
            openButton.addEventListener('click', openSidebar);
            closeButton.addEventListener('click', closeSidebar);
          });