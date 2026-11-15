# finsight-site

Public pages of FinSight, a private expense tracker for iPhone, in English and
Ukrainian: a "coming to the App Store" home page, the privacy policy and support.

Published with GitHub Pages from the `main` branch root:
<https://ogphantom.github.io/finsight-site/>. Every tracked file is served as
is (`.nojekyll`), so a push to `main` is a deploy.

| Page | English | Ukrainian |
| --- | --- | --- |
| Home | `index.html` | `uk/index.html` |
| Privacy policy | `privacy.html` | `uk/privacy.html` |
| Support | `support.html` | `uk/support.html` |

- `privacy.html` is the App Store Connect Privacy Policy URL and the URL in the
  app (`AppLinks.privacyPolicy`). `privacy-uk.html` was given to monobank in
  the provider application; it now redirects to `uk/privacy.html`. Keep both
  addresses working and both policies true to what the app does.
- `support.html` is the App Store Connect Support URL.
- Every page has the same language switcher in its header, linking to the same
  page in the other language. The root page alone follows the browser's
  language (Ukrainian if it comes before English), until the visitor picks one.
- Look: `assets/site.css`, built on the tokens of the app's design system.
  Headings use Fixel FS, a build of MacPaw's Fixel (SIL Open Font License 1.1,
  `assets/fonts/OFL.txt`).
