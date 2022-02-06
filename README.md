# WORD-COUNTER

This project is a word-counter

## Motivation

It was made as a task/challenge for a job application, in accord to the following parameters:

>As a user, I want to visualize a app that contains a form, with a text input in which I may
>freely write, without any character limitation. When I click the "count words" >button, the
>result with the number of written words should appear on the screen. If the texbox is empty
>when I click the button, I should see a error message indicating that >filling the textbox is needed.
>
>As a developer, I wish to look at the project and know how to execute it on my own pc."

## Build status

![build-status](https://img.shields.io/badge/build-finished-brightgreen)

## Code style

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Used languages
![html](https://icomoon.io/iconsabf18a1/4/364.svg) ![css](https://icomoon.io/iconsabf18a1/4/171.svg) ![js](https://icomoon.io/iconsabf18a1/4/404.svg)
  

## Features

It's main features are a _not entirely_ draggable textbox, where there's no character limit, a button which resolves the function that calculates the number of words and an output box in which the result will appear.

The coloring was done on CSS from a basic knowledge from the aimed company's palette.

## Code example
![code](https://carbon.now.sh/?bg=rgba%28132%2C190%2C243%2C1%29&t=lucario&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=function%2520wordCounter%28%29%2520%257B%250A%2520%2520let%2520text%2520%253D%2520document.querySelector%28%27.input%27%29.value%250A%250A%2520%2520let%2520array%2520%253D%2520text.split%28%27%2520%27%29%250A%250A%2520%2520array%2520%253D%2520array.filter%28empty%2520%253D%253E%2520String%28empty%29.trim%28%29%29%250A%250A%2520%2520let%2520result%2520%253D%2520array.length%250A%250A%2520%2520if%2520%28text%2520%253D%253D%25200%29%2520%257B%250A%2520%2520%2520%2520alert%28%27Erro%253A%2520Favor%2520preencher%2520a%2520caixa%2520de%2520texto%2520antes%2520de%2520enviar%2520o%2520formul%25C3%25A1rio%27%29%250A%2520%2520%257D%2520else%2520%257B%250A%2520%2520%2520%2520numericValue.innerHTML%2520%253D%2520result%250A%2520%2520%2520%2520numericValue.style.color%2520%253D%2520%27%2523001e57%27%250A%2520%2520%257D%250A%257D)

## How to use?

* Step 1: Open the following github folder https://github.com/Gapskii/word-counterStep;
* Step 2: Click on the **Code** button, followed by **download ZIP**;
* Step 3: After your download is finished, locate the file and extract it's content;
* Step 4: Open the **word-counter-main** folder, and locate the **index.html** file;
* Step 5: Double click the **index.html** file.
* Step 6: It should then open the application in your designated browser, ready to be tested!

## Credits

Credits due to Daniel, for addressing me this challenge to show some of my abilities.
