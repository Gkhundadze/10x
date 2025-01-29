function fetchUserData(callback) {
    console.log("🚀 Starting to fetch user data..."); // Log when callback starts
    document.getElementById("status").innerText = "⏳ Fetching user data...";
    
    // Start the progress animation
    document.getElementById("progress").style.width = "100%";
    console.log("🟢 Progress bar started...");

    setTimeout(() => {
        let success = Math.random() > 0.5; // 50% chance of success
        console.log("🔍 Checking if user data is available...");

        if (success) {
            callback(null, "✅ User data loaded successfully!"); // Success
        } else {
            callback("❌ Failed to load user data.", null); // Failure
        }
    }, 2000);
}

function startFetching() {
    console.log("🔵 Request started...");
    document.getElementById("status").innerText = "🔵 Request started...";
    document.getElementById("progress").style.width = "0"; // Reset progress bar

    // Pass a callback function to handle success or failure
    fetchUserData((error, message) => {
        if (error) {
            console.log("❌ Callback - Error:", error);
            document.getElementById("status").innerText = error;
        } else {
            console.log("✅ Callback - Success:", message);
            document.getElementById("status").innerText = message;
        }
        setTimeout(() => {
            console.log("🔄 Resetting progress and status.");
            document.getElementById("progress").style.width = "0"; // Reset after completion
            document.getElementById("status").innerText = "🔄 Done: Ready for new request.";
        }, 1000);
    });
}