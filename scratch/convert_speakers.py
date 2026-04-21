import re

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Match each object { ... }
pattern = re.compile(r'\{\s*name:\s*"(.*?)",\s*theme:\s*"(.*?)",\s*cv:\s*"(.*?)",\s*img:\s*"(.*?)"\s*\}', re.DOTALL)
matches = pattern.findall(content)

html_slides = ""
for m in matches:
    name, theme, cv, img = m
    cv_html = f'<p class="speaker-cv">{cv}</p>' if cv else ""
    html_slides += f"""
                            <div class="swiper-slide" data-name="{name}">
                                <div class="speaker-card">
                                    <span class="bonus-tag">BÔNUS</span>
                                    <img src="{img}" alt="{name}" class="speaker-img" loading="lazy">
                                    <div class="speaker-info">
                                        <h4 class="speaker-name">{name}</h4>
                                        <p class="speaker-theme">{theme}</p>
                                        {cv_html}
                                    </div>
                                </div>
                            </div>"""

with open('speakers_html.txt', 'w', encoding='utf-8') as f:
    f.write(html_slides)
