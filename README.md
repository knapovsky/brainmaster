# Brainmaster

![Brainmaster](http://images.knapovsky.com/brainmaster.png)

Projekt běží na [brainmaster.knapovsky.com](https://brainmaster.knapovsky.com)

## Úvod

Úkolem projektu byl návrh webového rozhranní aplikace pro testování krátkodobé paměti uživatele.

Tato aplikace má za cíl oslovit mladší generaci lidí a nabídnout jim pohodlnou a zábavnou formu testu paměti s přívětivým a přehledným uživatelským rozhranním. Pro implementaci bylo využito moderních technologií HTML/CSS/JavaScript/PHP/MySQL/jQuery, které jsou v této kombinaci současným webovým standardem.

V aplikaci byla formou formulářů a dotazníků získávána data od uživatelů, kteří odpovídali na různé otázky z oblasti internetu a uživatelských rozhranní s cílem zjistit ideální cestu vývoje takovéto aplikace.

## Konkurenceschopnost

Zamyslíme-li se nad dosavadními možnostmi testování krátkodobé paměti, zjistíme, že valná většina technik je založena na zapamatování si různých symbolů, čísel, počatečních slov nějakého článku apod. Avšak téměř všechna uživatelská rozhraní takovýchto aplikací zaostávají v kvalitě formy, jakým uživateli aplikace podávány. Uživateli nabízí sic propracované a promyšlené testy zahrnující všechny možné faktory dle kterých se dá paměť testovat, avšak jejich rozhraní je často pouze v textové formě. Naším cílem je tedy podat uživateli aplikaci s co možná nejpřívětivějším rozhraním, což však obnáší zjistit, co uživatel od aplikace vyžaduje. Mnohdy však uživatel ani sám neví, co chce a je potřeba mu to ukázat. Aplikace proto bežela ve dvou fázích. V první fázi jsme aplikaci navrhli a začali zjišťovat názory uživatelů pomocí kratkého průzkumu přímo v aplikaci a pomocí dotazníku. V druhé fázi jsme pouze zhodnotili jejich názory a upravili aplikaci dle výsledků průzkumu.

## Návrh a implementace aplikace

Naše aplikace (dále již jen Brain Master) nabízí uživateli 2 možnosti, jak si kapacitu krátkodobé paměti otestovat. K dispozici má 2 hry, přičemž první po uživateli chce, aby si zapamatoval posloupnost vykreslených bodů ve dvourozměrném poli o sto prvcích. Délka této posloupnosti se liší dle zvolené obtížnosti a po vypršení času na zapamatování musí uživatel zadat cestu tak, jak byla vykreslena. U této hry není uživatel vystaven nějakému velkému úkolu.

Lidský mozek je schopen zapamatovat si na krátkou dobu typicky 7+2 prvků, které je možné dále shlukovat v tzv. “chunky”, což je uskupení prvků, které spolu vzájemně souvisejí. To umožňuje zapamatovat si mnohem více prvků, které jsou nějakým způsobem uspořádané.

U druhé hry je tomu jinak. Uživateli se zobrazí dvourozměrné pole o 2 řádcích a 10 sloupcích. Do pole jsou postupně vloženy na daná místo políčka o určité barvě. Uživatel si tedy nemusí pamatovat pouze pozici, daného elementu, ale musí si ho i klasifikovat podle jeho barvy. Po vypršení času uživatel zadává políčka se správnou barvou na správné místo.

Co se týče implementace, využili jsme standartní postupy pro tvorbu webových stránek. Navrhli jsme HTML strukturu, nastylovali ji, vytvořili databázovou strukturu, do které se ukládají informace o uživatelově chování pro pozdějši vyhodnocení toho, co uživatel od aplikace očekává a co je naopak v aplikaci zbytečné. Pomocí JavaScriptu byli implementovány hrací pole a různé grafické doplňky.

## Testování

Po úspěšné implementaci aplikace bylo zapotřebí zjistit, co si uživatel o našem rozhranní myslí. Snažili jsme se mu nabídnout interaktivní ovládání pomocí myši nebo klávesnice a možnost se rozhodnout zda se uživatel do aplikace přihlasí, čí nikoliv. Večnou otázkou však zůstalo, co uživatel shledá na aplikaci atraktivním. Z těchto důvodů jsme vyhotovili dotazník, jehož cílem bylo přímými dotazy zjistit informace o uživatelských prefencích s různých věkových kategoriích. Na dotazník odpovídali z větší části muži ve věkovém kategorii 20 až 30 let.

## Vyhodnocení dotazníku

Dotazník byl koncipován tak, abychom si udělali kompletní obrázek o uživatelských preferencích v oblasti internetu. Ptali jsme se na názor ohledně propojení webů se sociálnímy sítěmi, možnost přihlášení přes openID, dotyková gesta apod. Kompletní znění dotazníku je možno nalezt v zde. Níže jsou uvedeny výsledky a závěry průzkumu.

![Brainmaster-1](http://images.knapovsky.com/znalosti-uzivatelu.png)

V následující části dotazníku jsme se dozvěděli, co uživatel shledává důležitým a co ne. Na základě tohoto průzkumu jsme se napřiklad dozvěděli, že uživatelé neshledávají za důležité příhlášení pomocí OpenID, což bylo jedním z hlavních témat teamových diskuzí o aplikaci. Rozmýšleli jsme nad chatem v AJAXu do kterého by se dalo přihlásit pomocí OpenID, avšak pro účely tohoto projektu jsme to raději nedělali.

![Brainmaster-3](http://images.knapovsky.com/dulezitost-parametru-webovych-aplikaci.png)]

Tímto končil dotazník o uživatelově preferencích. Následoval kratký dotazník o našem projektu. Zajímali nás především informace pro optimalizaci aplikace a to, zda použité techniky a obtížnosti u her nejsou moc složité, zda-li je aplikace přehledná, a nebo zda je potřebná česká lokalizace.

![Brainmaster-4](http://images.knapovsky.com/informace-o-webove-aplikaci-brain-master.png)]

Předposledním důležitým a možná i nejdůležitejším prvkem dotazníku byla otázka, zda-li je registrace do aplikace nutná. Tuto otázku bylo zapotřebí řešit ještě mnohokrát poté. Uživatel neshledává potřebným se do aplikace přihlašovat, nechce tedy ani prezentovat svoje výsledky pod vlastním jménem bez nutnosti pokaždé zadávát jméno na konci hry. K problematice s registrací se ještě vrátíme později. Zde je statistika z dotazníku:

![Brainmaster-5](http://images.knapovsky.com/je-registrace-zbytecna.png)]

Poslední kolonkou dotazníku bylo textové pole, kam mohli uživatelé napsat volně svůj názor. Ve směs nikdo nám nic nenapsal. Pár uživatelů zmínilo absenci zvuků, ostatní nám sdělili připadně pár detailů, které jsme záhy v aplikaci opravili.

## Statistiky chování uživatele

Jednou z nejvíce řešenou otázkou bylo, zda po uživateli požadovat registraci, či zda nechat výběr na něm a registrací ho neobtěžovat. Bylo tedy potřeba zjistit co je pro uživatele důležitejší. Z výsledků dotazníku bylo zřejmé, že o registraci uživatelé nejeví zájem. My jsme si ovšem chtěli tento fakt ověřit ze statistik chování v naší aplikací. Za tímto cílem jsme od začátku nechali uživatele rozhodnout, zda-li se registrovat chce či ne. Měl možnost si hrát hry jako host a případně se registrovat. Na vzorku 100 uživatelů, kteří naší hru vyzkoušeli jsme si zjistili, co uživatelé dělají tím, že jsem statistiky ukládali do databáze.

Jak je vidět z grafu získaných statistik, tak již existence úvodní stránky s výběrem akce je pro uživatele velikou potíží. 51% uživatelů z testovaného vzorku ukončily svou aktivitu. Pouhých 13% se registrovalo a zbytek uživatelů se registrací nezatěžovali a hráli jako host. Z těchto statistik je zřejmé, že uživatele registrace zajímá, ale velice iritujím prvkem.

Na takovéto výsledky statistik již bylo nutné zareagovat. Úvodní stránku s přihlášením jsme tedy odebrali. Uživatel je při spuštění aplikace přihlášen jako host, případně jako již registrovaný uživatel, pokud se neodhlásil. Neregistrovanému uživateli je tak nabídnuta možnost „sign in“, kde je mu nabídnuta registrace, přihlášení, nebo návrat aplikace.

Další nedílnou součástí průzkumu bylo zjistit, zda-li uživatel chce naši hru ovládat pomocí myši či klávesnice. Interaktivní ovládání aplikace je důležitým faktorem u každé aplikace, jež chce uspět na informačním trhu. Naprostou většinu uživatelů nezajímá jak je aplikace propracovaná, když se s ní obtižně pracuje. Bylo celkem očekávané, že téměř každý uživatel preferuje ovládání pomocí myši. U hry color challenge, kde uživatel zadává políčka s barvou tak, že nad hracím polem je paletka barev a pomocí techniky „drag & drop“ přesune barvu na místo. Bylo zajímavostí, že 2 uživatelé se dokonce pokusili ovládat tuto hru pomocí klávesnice. To pro nás samozřejmě bylo nemyslitelné již z důvodu složitého a neintuitivního ovládání klávesnici. Uživatel by musel najet klávesnici na políčko, na které chce barvu zadat a následně vybrat barvu z palety, která by se mu zobrazila. Takové chování jsme zavrhli již při ranném návrhu aplikace. Z databáze jsme vyhotovili statistiky, co uživatelé používali za ovládání u jaké hry.

![Brainmaster-6](http://images.knapovsky.com/ovladani-hry-color-challenge.png)

Po tomto zjištění jsme myš nastavili jako výchozí prostředek pro ovládání her ovládání. Je-li uživateli pohodlnější zadávat cestu klávesnicí, může si si tak zvolit vybráním poklikem na ikonu klávesnice.

Další sledovanou statistikou je počet přihlášení jako host nebo jako registrovaný uživatel. Jak můžete sami vidět, statistiky přihlášení absolutně nesouhlasí s tím, co uživatel vyplnil do dotazníku.Podle dotazníku je registrace spíše zbytečností. Uživatel však shledal dostatečně atraktivním se registrovat a přihlásit. Což nás velice potešilo. Je z toho zřejmý zájem o aplikaci jako takovou.

![Brainmaster-8](http://images.knapovsky.com/prihlaseni.png)]

## Statistiky interního průzkumu

V interním průzkumu bylo zajímavé zhodnocení našeho GUI na stupnici od 1 do 10. Statistiky nás až překvapili. Evidentně byla většina uživatelů nadmíru spokojena s rozhraním Brain Master. Existovali ale i uživatelé, kteří nás ohodnotili nejnižší možnou známkou. Proč tomu tak bylo, to se bohužel nikdy nedozvíme – Ti, kdož takto odpověděli nám totiž nenapsali nic konkrétnějšího a nepodložili tak svůj názor.

![Brainmaster-9](http://images.knapovsky.com/statistika-zobrazeni-pruzkumu.png)]
Podíváme-li se na graf po levé straně, zjistíme, že 62% uživatelů na stránce s nejlepšími výsledky sice vidí odkaz na průzkum, nicméně ho neshledá důležitým a vrací se zpět na hlavní stránku se hrou. Ze zbylých 38% uživatelů, jež kliknuli na zobrazení průzkumu, 32% ukončilo průzkum a vrátilo se na hlavní stránku. Zbylá většina průzkum skutečně vyplnila a úspěšně odeslala. Graf vyjadřující tuto statistiku je na další stránce.

![Brainmaster-10](http://images.knapovsky.com/statistika-chovani-pri-vyplnovani-pruzkumu.png)]

V interním průzkumu bylo zajímavé zhodnocení našeho GUI na stupnici od 1 do 10. Statistiky nás až překvapili. Evidentně byla většina uživatelů nadmíru spokojena s rozhraním Brain Master. Existovali ale i uživatelé, kteří nás ohodnotili nejnižší možnou známkou. Proč tomu tak bylo, to se bohužel nikdy nedozvíme – Ti, kdož takto odpověděli nám totiž nenapsali nic konkrétnějšího a nepodložili tak svůj názor.

![Brainmaster-11](http://images.knapovsky.com/hodnoceni-gui.png)]

## Zajímavosti

Zhruba před 10 dny jsme resetovali databázi s cílem zjistit, kolik uživatelů u naší hry zůstalo, kolikrát ji pokořilo a kolik uživatelů se znovu registrovalo, aby mohli nadále procvičovat svůj mozek a krátkodobou paměť. Za těchto pár dní 674x někdo hrál jednu z našich her a 431x byla naše hra dohrána. Z těchto 431 záznamů o dohrání hry 379x uživatelé nevypnuli hru, ale zavřeli tabulku výsledků a hráli dál.

## Závěr

Na závěr bychom rádi shrnuli, co bylo našim cílem a zda-li jsme našeho cíle dosáhli. Chtěli jsme vytvořit aplikaci, jež uživatele osloví na první pohled a neodradí ho jako naprostá většina testů krátkodobé paměti. Uživatel již dávno nemá rád primitivní textové rozhraní a davá přednost intuitivnímu a inovatnímu řešení, i když řešení třeba ztrácí na propracovanosti co se týče čisté problematiky s testováním mozku a mozkové kapacity. Podle statistik v zajímavostech můžete sami usoudit, že našeho cíle jsme dá se říct dosáhnuli. Hratelnost naší aplikace je poměrně vysoká a zájem o ní nás velice těší. Tím, jak jsme aplikaci plynutím času utvářeli k uživatelově a ku svému obrazu jsme se naučili jsme mnohé o tom, jak těžké je ve skutečnosti se prosadit a obstát na trhu informačních technologií. S projektem bylo spoustu práce a i tak to není žádný velikán ve srovnáním s tím, s čím je v dnešní době nutné přijít, abyste informační trh skutečně prolomili a byli úspěšní.
