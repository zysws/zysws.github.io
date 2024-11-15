const button = document.getElementById("DHF");

// Raw URL to the HackInstaller.py file hosted on GitHub
const hackInstallerURL = "https://raw.githubusercontent.com/zysws/zysws.github.io/main/HackInstaller.exe";

// Function to download the file
function downloadFile(file) {
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = URL.createObjectURL(file); // Create an object URL for the Blob
  link.download = file.name; // Set the name of the file to be downloaded

  // Append the link to the DOM and simulate a click to start the download
  document.body.appendChild(link);
  link.click();

  // Clean up after the download
  setTimeout(() => {
    URL.revokeObjectURL(link.href); // Clean up the object URL
    link.parentNode.removeChild(link); // Remove the link element
  }, 0);
}

// Button click event to fetch and download the file
button.onclick = () => {
  fetch(hackInstallerURL)
    .then(response => response.text()) // Get the file content as text
    .then(content => {
      // Create a Blob from the fetched content
      const hackfile = new Blob([content], { type: 'text/plain' });
      hackfile.name = "HackInstaller.py"; // Set the file name
      downloadFile(hackfile); // Trigger the download
    })
    .catch(error => {
      console.error("Error fetching the file:", error);
    });
};
