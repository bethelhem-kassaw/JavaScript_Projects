
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
          document.addEventListener('DOMContentLoaded', function () {
            const links = document.querySelectorAll('.sidebar a');
          
            // Check if any links exist
            if (!links || links.length === 0) {
              console.error('No links found.');
              return;
            }
          
            // Add click event listeners to the links
            links.forEach(function (link) {
              link.addEventListener('click', function (event) {
                event.preventDefault();
          
                // Reset the styles of all parent div elements
                links.forEach(function (link) {
                  link.parentElement.style.borderLeft = 'none';
                  link.querySelector('i').style.color = 'black';
                });
          
                // Apply styles to the parent div of the clicked link
                link.parentElement.style.borderLeft = '2px solid red'; // Change the left side of the border to red
                link.querySelector('i').style.color = 'red'; // Change the icon color to red
              });
            });
          });