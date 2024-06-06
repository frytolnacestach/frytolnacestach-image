# ASSETS
Adresář assets obsahuje kód který je používaná pouze pro vývoj.

## Struktůra adresáře ```assets/scss```
v adresáři ```assets/scss``` se nachází adresáře sass souborů. Jako hlavní soubor je ```assets/scss/main.scss```, který je využit pro build.

```
├── __mixin
├── _base
├── atoms
├── molecules
├── organisms
├── pages
└── templates
```

## Rozdělení scss
### mixin (```assets/scss/__mixin```)
Mixin funkce které se používají v ostatních scss souborech.

### base (```assets/scss/_base```)
Základní css vlastnosti použivané v celém projektu

### atoms (```assets/scss/atoms```)
Nejmenší komponenty, jako jsou samostatná tlačítka nebo formůlářové prvky.

### molecules (```assets/scss/molecules```)
Větší komponenty, jako jsou seznamy.

### organisms (```assets/scss/organisms```)
Kompletní komponenty, které slouží jako celek.

### pages (```assets/scss/pages```)
Nastavení stránky například pro různé modifikace stránky

### templates (```assets/scss/templates```)
Slouží k nastavení templaty a pozicovaní komponent v rámci stránky.