document.addEventListener("DOMContentLoaded", function () {
    // Get all the links in the sidebar
    const sidebarLinks = document.querySelectorAll(".list-group-item");

    // Function to handle click on sidebar links
    function handleSidebarLinkClick(e) {
        sidebarLinks.forEach((link) => {
            link.classList.remove("active");
        });

        e.target.classList.add("active");
    }

    // Add click event listeners to sidebar links
    sidebarLinks.forEach((link) => {
        link.addEventListener("click", handleSidebarLinkClick);
    });
});

//// Function to load main content dynamically
// function loadMainContent(pageName) {
//     const mainContentDiv = document.getElementById('mainContent');
//     fetch(pageName)
//         .then((response) => response.text())
//         .then((content) => {
//             mainContentDiv.innerHTML = content;
//         })
//         .catch((error) => {
//             mainContentDiv.innerHTML = '<h2>Error loading the page</h2>';
//             console.error(error);
//         });
// }

// // Add click event listeners to sidebar links
// document.addEventListener('DOMContentLoaded', () => {
//     const sidebarLinks = document.querySelectorAll('.list-group-item-action');
//     sidebarLinks.forEach((link) => {
//         link.addEventListener('click', function (event) {
//             event.preventDefault();
//             const pageName = this.getAttribute('href');
//             loadMainContent(pageName);
//         });
//     });
// });

// // Load the default page when the page is initially loaded
// document.addEventListener('DOMContentLoaded', () => {
//     loadMainContent('home.html');
// });
