function downloadVideo() {
  const url = document.getElementById("videoUrl").value;
  fetch("/api/download", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  })
    .then((res) => res.json())
    .then((data) => {
      const result = document.getElementById("result");
      if (data.success) {
        result.innerHTML = `<a href="${data.downloadUrl}" download>Click here to download</a>`;
      } else {
        result.innerHTML = "Failed to get download link.";
      }
    })
    .catch(() => {
      document.getElementById("result").innerText = "Error occurred.";
    });
}