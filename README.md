
## File Structure for Frontend

Within the download you'll find the following directories and files:

```
.
├── Frontend
│   ├── build
│   │   ├── apple-icon.png
│   │   ├── asset-manifest.json
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── manifest.json
│   │   ├── precache-manifest.741862d0f941e92da7f47cf88eae47b8.js
│   │   ├── service-worker.js
│   │   └── static
│   │       ├── css
│   │       │   ├── 2.a3d3ba89.chunk.css
│   │       │   ├── 2.a3d3ba89.chunk.css.map
│   │       │   ├── main.2ee20d22.chunk.css
│   │       │   └── main.2ee20d22.chunk.css.map
│   │       ├── js
│   │       │   ├── 2.985eb5f6.chunk.js
│   │       │   ├── 2.985eb5f6.chunk.js.map
│   │       │   ├── main.538c58f1.chunk.js
│   │       │   ├── main.538c58f1.chunk.js.map
│   │       │   ├── runtime~main.a8a9905a.js
│   │       │   └── runtime~main.a8a9905a.js.map
│   │       └── media
│   │           ├── dashboard.d878ef6f.svg
│   │           ├── establishments-and-operations.071737c5.svg
│   │           ├── events-and-production.856f55d1.svg
│   │           ├── face-3.ce7a6b79.jpg
│   │           ├── glyphicons-halflings-regular.448c34a5.woff2
│   │           ├── glyphicons-halflings-regular.89889688.svg
│   │           ├── glyphicons-halflings-regular.e18bbf61.ttf
│   │           ├── glyphicons-halflings-regular.f4769f9b.eot
│   │           ├── glyphicons-halflings-regular.fa277232.woff
│   │           ├── human-resources.7e27299c.svg
│   │           ├── Pe-icon-7-stroke.01798bc1.ttf
│   │           ├── Pe-icon-7-stroke.71394c0c.eot
│   │           ├── Pe-icon-7-stroke.b38ef310.woff
│   │           ├── Pe-icon-7-stroke.c45f7de0.svg
│   │           ├── policy.6c648457.svg
│   │           ├── power.6ca0db15.svg
│   │           ├── program.101ecf94.svg
│   │           ├── project.ff8dc46d.svg
│   │           ├── settings.86df8ee9.svg
│   │           └── vendors.7360fe0b.svg
│   ├── package.json
│   ├── public
│   │   ├── apple-icon.png
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── _redirects
│   ├── src
│   │   ├── assets
│   │   │   ├── css
│   │   │   │   ├── animate.min.css
│   │   │   │   ├── demo.css
│   │   │   │   ├── htc-icons.css
│   │   │   │   ├── pe-icon-7-stroke.css
│   │   │   │   └── styles.css
│   │   │   ├── fonts
│   │   │   │   ├── glyphicons-halflings-regular.eot
│   │   │   │   ├── glyphicons-halflings-regular.svg
│   │   │   │   ├── glyphicons-halflings-regular.ttf
│   │   │   │   ├── glyphicons-halflings-regular.woff
│   │   │   │   ├── glyphicons-halflings-regular.woff2
│   │   │   │   ├── Pe-icon-7-stroke.eot
│   │   │   │   ├── Pe-icon-7-stroke.svg
│   │   │   │   ├── Pe-icon-7-stroke.ttf
│   │   │   │   └── Pe-icon-7-stroke.woff
│   │   │   ├── icons
│   │   │   │   ├── dashboard.svg
│   │   │   │   ├── establishments-and-operations.svg
│   │   │   │   ├── events-and-production.svg
│   │   │   │   ├── human-resources.svg
│   │   │   │   ├── policy.svg
│   │   │   │   ├── power.svg
│   │   │   │   ├── program.svg
│   │   │   │   ├── project.svg
│   │   │   │   ├── settings.svg
│   │   │   │   └── vendors.svg
│   │   │   ├── img
│   │   │   │   ├── bg_login.png
│   │   │   │   ├── default-avatar.png
│   │   │   │   ├── faces
│   │   │   │   │   ├── face-0.jpg
│   │   │   │   │   ├── face-1.jpg
│   │   │   │   │   ├── face-2.jpg
│   │   │   │   │   ├── face-3.jpg
│   │   │   │   │   ├── face-4.jpg
│   │   │   │   │   ├── face-5.jpg
│   │   │   │   │   ├── face-6.jpg
│   │   │   │   │   ├── face-7.jpg
│   │   │   │   │   └── tim_vector.jpe
│   │   │   │   ├── loading-bubbles.svg
│   │   │   │   └── logo.png
│   │   │   └── sass
│   │   │       ├── htc
│   │   │       │   ├── _alerts.scss
│   │   │       │   ├── _buttons.scss
│   │   │       │   ├── _calendar.scss
│   │   │       │   ├── _cards.scss
│   │   │       │   ├── _chartist.scss
│   │   │       │   ├── _checkbox-radio-switch.scss
│   │   │       │   ├── _dropdown.scss
│   │   │       │   ├── _footers.scss
│   │   │       │   ├── _inputs.scss
│   │   │       │   ├── _loginform.scss
│   │   │       │   ├── _misc.scss
│   │   │       │   ├── mixins
│   │   │       │   │   ├── _buttons.scss
│   │   │       │   │   ├── _cards.scss
│   │   │       │   │   ├── _chartist.scss
│   │   │       │   │   ├── _icons.scss
│   │   │       │   │   ├── _inputs.scss
│   │   │       │   │   ├── _labels.scss
│   │   │       │   │   ├── _morphing-buttons.scss
│   │   │       │   │   ├── _navbars.scss
│   │   │       │   │   ├── _social-buttons.scss
│   │   │       │   │   ├── _tabs.scss
│   │   │       │   │   ├── _transparency.scss
│   │   │       │   │   └── _vendor-prefixes.scss
│   │   │       │   ├── _mixins.scss
│   │   │       │   ├── _navbars.scss
│   │   │       │   ├── _responsive.scss
│   │   │       │   ├── _sidebar-and-main-panel.scss
│   │   │       │   ├── _tables.scss
│   │   │       │   ├── _typography.scss
│   │   │       │   └── _variables.scss
│   │   │       └── styles.scss
│   │   ├── components
│   │   │   ├── Card
│   │   │   │   └── Card.tsx
│   │   │   ├── CustomButton
│   │   │   │   └── CustomButton.tsx
│   │   │   ├── CustomCheckbox
│   │   │   │   └── CustomCheckbox.tsx
│   │   │   ├── CustomRadio
│   │   │   │   └── CustomRadio.tsx
│   │   │   ├── Footer
│   │   │   │   ├── AdminFooter.tsx
│   │   │   │   └── BasicFooter.tsx
│   │   │   ├── FormInputs
│   │   │   │   └── FormInputs.tsx
│   │   │   ├── Navbars
│   │   │   │   ├── AdminNavbarLinks.tsx
│   │   │   │   └── AdminNavbar.tsx
│   │   │   ├── Sidebar
│   │   │   │   └── Sidebar.tsx
│   │   │   ├── StatsCard
│   │   │   │   └── StatsCard.tsx
│   │   │   ├── Tasks
│   │   │   │   └── Tasks.tsx
│   │   │   └── UserCard
│   │   │       └── UserCard.tsx
│   │   ├── context
│   │   │   ├── actions
│   │   │   │   ├── actions.ts
│   │   │   │   └── actionTypes.ts
│   │   │   ├── contexts
│   │   │   │   ├── Auth
│   │   │   │   │   └── AuthContext.tsx
│   │   │   │   └── Policies
│   │   │   │       └── PoliciesContext.jsx
│   │   │   └── reducers
│   │   │       └── AuthReducer.ts
│   │   ├── index.tsx
│   │   ├── layouts
│   │   │   ├── Admin.tsx
│   │   │   └── Basic.tsx
│   │   ├── logo.svg
│   │   ├── react-app-env.d.ts
│   │   ├── routes.ts
│   │   ├── utils
│   │   │   └── Login.ts
│   │   ├── variables
│   │   │   ├── icons.tsx
│   │   │   └── Variables.tsx
│   │   └── views
│   │       ├── Admin
│   │       │   ├── CountryPrograms.tsx
│   │       │   ├── Dashboard.tsx
│   │       │   ├── DonorProjects.tsx
│   │       │   ├── EstablishmentsAndOperations.tsx
│   │       │   ├── EventsAndProduction.tsx
│   │       │   ├── HumanResources.tsx
│   │       │   ├── PoliciesAndStandards.tsx
│   │       │   ├── Settings.tsx
│   │       │   └── VendorAndAssets.tsx
│   │       └── Auth
│   │           └── Login.tsx
│   ├── tsconfig.json
│   └── yarn.lock
├── LICENSE.md
└── README.md
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:



