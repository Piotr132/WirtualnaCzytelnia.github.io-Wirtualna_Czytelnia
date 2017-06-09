# Wirtualna Czytelnia

  Aplikacja została stworzona na potrzeby zajęć z przedmiotu Programowanie Aplikacji Webowych SPA na Uniwersytecie Ekonomicznym w Krakowie w roku akademickim 2016/2017

Opis aplikacji:
------
Ideą aplikacji jest umożliwienie użytkownikom internetu przeczytania książki bez wychodzenia z domu a dla tych bardziej leniwych odsłuchania wybranej książki.

Funkcjonalność:
-----
* prezentacja wszystkich dostępnych książek w naszej czytelni
* widok okładki, autora i tytułu książki
* możliwość wyszukania książki po tytule lub autorze
* możliwość zapisywania oraz przeglądania ulubionych tytułów
* po wybraniu konkretnej książki dodatkowo prezentowana jest nazwa epoki, gatunek literacki, rodzaj
* możliwość przeczytania książki w przeglądarce pdf
* dla wybranych tytułów dostępna jest wersja audio

Wykorzystywane technologie:
-----
1. [AJAX](https://pl.wikipedia.org/wiki/AJAX)
2. [AngularJS w wersji 1.6.1](https://pl.wikipedia.org/wiki/AngularJS)
3. [Bootstrap w wersji 3.3.7](https://pl.wikipedia.org/wiki/Bootstrap_(framework))
4. [CORS](https://pl.wikipedia.org/wiki/Cross-Origin_Resource_Sharing)
5. [API](https://pl.wikipedia.org/wiki/Application_Programming_Interface) zaczerpnięte z serwisu [WolneLektury.pl](http://wolnelektury.pl/api/)

Manual:
-----
* pliki html:
1. [główny plik html aplikacji do którego dołączane są wszystkie pozostałe](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/index.html)
2. [widok strony głównej](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/templates/main.html)
3. [widok listy książek](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/templates/books.html)
4. [widok szczegółów książki](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/templates/book.html)
5. [widok ulubionych książek](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/templates/favourites.html)
* główne pliki aplikacji:
1. [główny plik aplikacji, tutaj jest ona inicjowana, dołączane są linki pod kóre można wejść tzw. route'y](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/app.js)
* pliki konfiguracyjne:
1. [tutaj znajduje się adres wykorzystywanego API](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/config.js)
* kontrolery:
1. [obsługa listy książek, deklaracja stronicowania oraz wyszukiwania](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/controllers/books.controller.js)
2. [obsługa szczegółów książki, wczytywanie i obsluga audiobooka](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/controllers/book.controller.js)
3. [obsługa "ulubionych", pobieranie i wyświetlanie książek i okładek dodanych do tej kategorii](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/controllers/favourites.controller.js)
* services:
1. [komunikacja z API](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/services/api.service.js)
2. [zarządzanie kategorią "ulubione" - dodawanie, usuwanie, obsługa LocalStorage, pobieranie szczegółów książki](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/services/favourites.service.js)
3. [zarządzanie stanem loadera](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/services/loader.service.js)
* directives:

  *lista książek:*
    1. [definicja dyrektywy](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/directives/bookTeaser/bookTeaser.directive.js)
    2. [kontroler dyrektywy odpowiadający za wyświetlanie](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/directives/bookTeaser/bookTeaser.directive.js)
    3. [plik html z widokiem dyrektywy, który pokazywany jest na stronie aplikacji](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/directives/bookTeaser/bookTeaser.html)

  *szczegóły wybranej książki:*
    1. [definicja dyrektywy](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/directives/bookInfo/bookInfo.directive.js)
    2. [kontroler dyrektywy odpowiadający za wyświetlanie](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/directives/bookInfo/bookInfo.controller.js)
    3. [plik html z widokiem dyrektywy, który pokazywany jest na stronie aplikacji](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/directives/bookInfo/bookInfo.html)

  *ulubione:*
    1. [definicja dyrektywy](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/directives/favourite/favourite.directive.js)
    2. [kontroler dyrektywy odpowiadający za wyświetlanie](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/directives/favourite/favourite.controller.js)
    3. [plik html z widokiem dyrektywy, który pokazywany jest na stronie aplikacji](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/directives/favourite/favourite.html)

  *strona główna:*
    1. [definicja dyrektywy](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/directives/header/header.directive.js)
    2. [kontroler dyrektywy odpowiadający za wyświetlanie](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/directives/header/header.controller.js)
    3. [plik html z widokiem dyrektywy, który pokazywany jest na stronie aplikacji](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/directives/header/header.html)

  *widok ładowania strony:*
    1. [definicja dyrektywy](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/directives/loader/loader.directive.js)
    2. [kontroler dyrektywy odpowiadający za wyświetlanie](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/directives/loader/loader.controller.js)
    3. [plik html z widokiem dyrektywy, który pokazywany jest na stronie aplikacji](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/directives/loader/loader.html)
* obsługa dźwięku audiobook - w całości zapożyczono z [ngAudio](https://github.com/danielstern/ngAudio):
1. [bilblioteka obsługi dźwięku](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/libs/angular.audio.js)
* css:
1. [dostosowanie wyglądu całości aplikacji](https://github.com/WirtualnaCzytelnia/WirtualnaCzytelnia.github.io-Wirtualna_Czytelnia/blob/master/aplikacja/app/css/style.css)


Poprawność działania:
-----
* aplikacja działa poprawnie lokalnie w przeglądarce Mozilla Firefox
* aby korzystać z aplikacji w innej przeglądarce kliknij [tutaj](http://wizard.uek.krakow.pl/~s189858/WirtualnaCzytelnia.html)

Autorzy aplikacji:
-----
* _Dominika Zduniewicz, nr albumu 191793, grupa dziekańska KrZZIs3011Si_
* *Adrian Szypuła, nr albumu 189858, grupa dziekańska KrZZIs3011Si*
