> Skolprojekt. Det här är inte en officiell sida från Massive Entertainment eller Ubisoft. Speltitlarna tillhör Ubisoft. Samarbetspartnerna är påhittade och bilderna är egna platshållare.
Html och css-filerna är fyllda med kommentarer från alla i gruppen om vad vi vill åstadkomma med de olika kod-sekvenserna.


## Länkar

## Repo: https://github.com/johangrit1/java26-html-css-slutprojekt-Area0
## github pages: https://johangrit1.github.io/java26-html-css-slutprojekt-Area0/
## Skiss: ![description](images\Skiss.jpg)
## Skiss 2: ![description](images\Skiss-2.jpg)



## Gruppen och våra ansvar
| Namn | Ansvar |
| Johan | Repo och GitHub Pages, grundstruktur, färger och mörkt läge, hero (huvudrubrik), animationer, README |
| Alexander | Navigering, hamburgermeny, Om oss, galleri med CSS Grid, breakpoints, aktiv sida i menyn |
| Zelal | Hoppa till innehållet, synligt fokus, alla fyra spelsidor, "minska rörelse", tillgänglighetstest |
| Norali | README-starten, footer, samarbetspartners, spelbibliotek (tabell), kontaktsida med alla medlemmar |

## Sidor
| Fil | Innehåll |
| `index.html` | Startsida: hero (promotion), om oss, galleri med spelen |
| `the-division-2.html`, `march-of-giants.html`, `ghost-recon.html`, `splinter-cell.html` |
| `tabell.html` | Spelbibliotek: tabell med alla spelen |
| `kontakt.html` | Kontaktsida med alla i gruppen och ett kontaktformulär |

## Teknik

- Semantisk HTML: `header`, `nav`, `main`, `section`, `article`, `aside` och `footer`.
- Bootstrap 5 (CSS och JavaScript länkas). Vi använder det för menyn, dropdownen, knappar, kort, tabellen och formuläret.
- Egen CSS: `style/style.css` med CSS-variabler, Flexbox (siffror, partners, kort för gruppen) och Grid (galleri, spelsidor).
- Hamburgermeny: Bootstraps navbar (`navbar-expand-md`). Under 768px blir menyn en hamburgerknapp.
- Breakpoints: 768px (surfplatta) och 992px (desktop).
- Mörkt läge: följer datorns eller mobilens inställning med `@media (prefers-color-scheme: dark)`. Där byter vi både våra egna färger och Bootstraps färger (`--bs-body-bg` med flera).
- Animationer: heron glider in och knappar/kort lyfter vid hover.
- JavaScript: Bootstraps egen fil, för att menyn och dropdownen ska kunna öppnas samt för att mörkt/ljust läge ska fungera. 

## Tillgänglighet

- "Hoppa till innehållet"-länk först på varje sida (syns när man trycker Tab).
- Hamburgerknappen har `aria-label` och `aria-expanded`, så skärmläsare vet vad den gör.
- Tydlig fokusram när man använder tangentbordet.
- Alla bilder har `alt`-text. Loggan bredvid namnet har tom `alt` eftersom texten redan står där.
- En `h1` per sida och rubriker i rätt ordning.

## Så jobbade vi
- Vi använde oss av AI för att dela in vem som gör vad samt för att skapa ett schema på vad som behövs göras och när för att ligga i rätt fas med hemsidans utveckling.
- En person committade i taget.
- Innan man började: `git pull`. När man var klar: `git add`, `git commit`, `git push` och sedan ett meddelande i gruppchatten.