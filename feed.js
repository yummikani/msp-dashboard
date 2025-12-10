async function loadRSS() {
    const rssUrl = "https://learn.microsoft.com/api/rss/azure-active-directory-release-notes"; 
    // Replace with YOUR RSS URL

    const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(rssUrl));
    const data = await response.json();

    let html = "";

    data.items.forEach(item => {
        html += `
            <div style="border:1px solid #ccc;padding:10px;margin:10px;">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="${item.link}" target="_blank">Read more</a><br>
                <small>${item.pubDate}</small>
            </div>
        `;
    });

    document.getElementById("feed").innerHTML = html;
}

loadRSS();
