const spinnerStyles = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.spinner {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = spinnerStyles;
document.head.appendChild(styleSheet);

const anchors = document.querySelectorAll("a > img");

anchors.forEach((img) => {
  img.parentElement.addEventListener("click", function (e) {
    e.preventDefault();

    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "9999";

    const spinner = document.createElement("div");
    spinner.className = "spinner";
    modal.appendChild(spinner);

    const largeImage = new Image();

    largeImage.onload = function () {
      // Hide spinner when image loads
      spinner.style.display = "none";
    };

    let imgUrl = img.src;
    if (imgUrl.endsWith("!s")) {
      imgUrl = imgUrl.substring(0, imgUrl.length - 2);
    }

    largeImage.src = imgUrl;
    largeImage.style.maxWidth = "90%";
    largeImage.style.maxHeight = "90%";
    modal.appendChild(largeImage);

    modal.addEventListener("click", function () {
      document.body.removeChild(modal);
    });

    document.body.appendChild(modal);
  });
});
