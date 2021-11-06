export const Footer = () => {
    const footerContainer = document.querySelector('footer');
    footerContainer.innerHTML += `
        <img src="https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vbWVkaWEucmJsLm1zL2ltYWdlP3U9JTJGZmlsZXMlMkYyMDE1JTJGMTElMkYxOCUyRjYzNTgzNDY2OTY2MzQzNDAzOS0xMjc0NDA2MTUwX3R1bWJscl9pbmxpbmVfbnhucjVlc3JIcTFyOHNjYWlfNTAwLmdpZiZobz1odHRwJTNBJTJGJTJGY2RuMS50aGVvZHlzc2V5b25saW5lLmNvbSZzPTc3MiZoPThkZTc4OTcyZTQ3MWQ0NjNjY2RlZDU1OGI5YWUwYjIzNzBmMjMyYzc1OWE1ZDQ2ZTRlYmU2ZmIxN2IyNDBhZjgmc2l6ZT05ODB4JmM9MTM5MzU5ODQxNyIsImV4cGlyZXNfYXQiOjE2NTcwMjAxMjl9.CwSJSriU4xVZQlYrDoNxSXv6_CxOhfZ16iEnnxSqFOY/img.jpg?width=1200&height=628D" alt="dancing potato bowl">
        <p class="footerBlurb">Hi! I'm Doug, the dancin' tater bowl!</p>
        <p>&copy;2021 Team Mashed Potatoes &bull; NewforceWV Cohort-5 &bull; <a href="https://github.com/NewForce-Cohort-5/holiday-road-mashed-potatoes" target="_blank"><nobr>Visit us on GitHub!</nobr></a></p>
    `
}