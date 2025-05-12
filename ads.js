
if (!window.location.pathname.endsWith("index.html") && window.location.pathname !== "/") {
    var ad = document.createElement("div");
    ad.innerHTML = `
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-6152686855196540"
             data-ad-slot="5611118976"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>
             (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
    `;
    document.body.insertBefore(ad, document.body.firstChild);
}
