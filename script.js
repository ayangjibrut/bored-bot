function getActivityIdea() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(res => res.json())
        .then(data => {
            document.getElementById("idea").textContent = data.activity
            document.querySelector('#new-idea').textContent = "GET NEW IDEA!"
        })
}

document.getElementById("new-idea").addEventListener("click", getActivityIdea)