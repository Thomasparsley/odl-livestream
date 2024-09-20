## Požadavky

- [NodeJS - LTS](https://nodejs.org/en)
- [OBS](https://obsproject.com/)
- [vCOM port driver](https://ftdichip.com/drivers/vcp-drivers/)

## Časomíra

_Pro spuštění není potřeba mít připojenou časomíru k PC. Pokud časomíra není připojena, lze přeskočit kroky (`Zjištění portu časomíry`, `Nastevení portu`). Časomíra se spustí v zjednodušené simulaci._

### Zjištění portu časomíry

1. Stiskněte klávesy "Win + X" a vyberte možnost "Správce zařízení" z nabídky, která se zobrazí.
2. V okně Správce zařízení rozbalte kategorii "Porty (COM a LPT)". To vám zobrazí seznam všech COM portů na vašem systému.
3. COM porty budou uvedeny s jejich názvy a čísly, například "COM1," "COM2," atd.

### Nastevení portu

V souboru `./reader/index.ts:12` můžeme nastavit sériový port.
```ts
  path: "/dev/tty.usbserial-1140", // <-- EDIT HERE
```

Pokud máme připojenou časomíru na portu 4, úprava bude vypadat takto
```ts
  path: "COM4",
```

### Spuštění 

Pro otevření příkazového řádku (Command Prompt) na operačním systému Windows můžete použít několik způsobů:

* Použití vyhledávání:
    1. Stiskněte klávesovou zkratku Win + S pro spuštění vyhledávání.
    2. Do vyhledávacího pole napište "cmd" nebo "příkazový řádek".
    3. Klikněte na výsledky hledání "Příkazový řádek" nebo "Command Prompt."
* Použití nabídky Start:
    1. Klikněte na tlačítko "Start" v levém dolním rohu obrazovky (obvykle ikona Windows).
    2. V nabídce Start najděte složku "Windows Systém" a rozbalte ji.
    3. Klikněte na "Příkazový řádek."
* Použití klávesové zkratky:
    1. Stiskněte klávesovou zkratku Win + R, což otevře dialog Spustit.
    2. Do pole "Spustit" napište "cmd" a stiskněte Enter.

Otevtření adresáře
```sh
cd path
```

zde path je cílový adresář, například `C:/Users/User/Documents/odl-livestream/`, tedy:
```sh
cd C:/Users/User/Documents/odl-livestream/
```

Nainstalování závislostí pro reader
```sh
cd ./reader
npm i
```

Samotné spuštění
```sh
npm run start
```

## Livestream layout

Nainstalování závislostí pro layout
```sh
cd C:/Users/User/Documents/odl-livestream/
cd client
npm i
```

Vytvoření produkčního layoutu
```sh
npm run build
```

Samotné spuštění
```sh
npm run preview
```


## OBS

V obs pak stačí přidat WebView na `http://127.0.0.1:port/`, kde port lze vidět při spuštění layout.
