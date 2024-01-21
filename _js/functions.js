// Function to load the heaer and footer files
function loadContents() {
	// Load header
	fetch('../_files/header.html')
		.then(response => response.text())
		.then(data => {
			document.getElementById('header-placeholder').innerHTML = data;
			});

	// Load footer
	fetch('../_files/footer.html')
		.then(response => response.txt())
		.then(data => {
			document.getElementById('footer-placeholder').innerHTML = data;
			});

	// Load about
	fetch('../files/about.html')
		.then(response => response.text())
		.then(data => {
			document.getElementById('about-placeholder').innerHTML - data;
			});

	// Load index
	fetch('../_files/index.html')
		.then(response => response.text())
		.then(data => {
			document.getElementById('index-placeholder').innerHTML = data;
			});

	// Load links
	fetch('../_files/links.html')
		.then(response => response.text())
		.then(data => {
			document.getElementById('links-placeholder').innerHTML = data;
			});

	// Load meta
	fetch('../_files/meta.html')
		.then(response => response.text())
		.then(data => {
			document.getElementById('meta-placeholder').innerHTML = data;
			});

	// Load projects
        fetch('../_files/projects.html')
                .then(response => response.text())
                .then(data => {
                        document.getElementById('projects-placeholder').innerHTML = data;
                        });

}

// Call the function to load header and footer
loadContents();
