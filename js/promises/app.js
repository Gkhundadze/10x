const fetchBtn = document.querySelector('#fetch')


fetchBtn.addEventListener('click', () => {
  console.log("🔵 Request started...");
  document.getElementById("status").innerText = "🔵 Request started...";
  document.getElementById("progress").style.width = "0"; // Reset progress bar

  fetchUserData()
  .then((message) => {
    console.log("✅ Promise resolved!");
    document.getElementById("status").innerText = message;
  })
  .catch((error) => {
    console.log("❌ Promise rejected!");
    document.getElementById("status").innerText = error;
  })
  .finally(() => {
    setTimeout(() => {
      console.log("🔄 Resetting progress and status.");
      document.getElementById("progress").style.width = "0"; // Reset after completion
      document.getElementById("status").innerText = "🔄 Done: Ready for new request.";
    }, 1000);
  });
})

function fetchUserData() {
  return new Promise((resolve, reject) => {
      console.log("🚀 Starting to fetch user data..."); // Log when Promise starts
      document.getElementById("status").innerText = "⏳ Fetching user data...";
      
      // Start the progress animation
      document.getElementById("progress").style.width = "100%";
      // console.log("🟢 Progress bar started...");

      setTimeout(() => {
          let success = Math.random() > 0.5; // 50% chance of success
          console.log("🔍 Checking if user data is available...");

          if (success) {
              resolve("✅ User data loaded successfully!");
              console.log("✅ Data loaded successfully!");
          } else {
              reject("❌ Failed to load user data.");
              console.log("❌ Data load failed.");
          }
      }, 2000);
  });
}