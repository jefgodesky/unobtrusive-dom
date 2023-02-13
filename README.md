# unobtrusive-dom
![GitHub package.json version](https://img.shields.io/github/package-json/v/jefgodesky/unobtrusive-dom)
![License: GPL-3.0](https://img.shields.io/github/license/jefgodesky/unobtrusive-dom)

**Progressive enhancement** works very well with an old way of approaching JavaScript that some of us used to call **unobtrusive JavaScript**. The idea was that at not point should the page _depend_ on JavaScript; rather, that JavaScript is always an _enhancement_. If everything goes well, you get a better experience, but if JavaScript fails for any reason (as it so often does, [for so many reasons](https://www.kryogenix.org/code/browser/everyonehasjs.html)) you still get the basic parts of the page.

When you make a site with one of the popular JavaScript frameworks, you _can_ write it in an unobtrusive way, but that’s not the way most apps are written — meaning you won’t be able to use most of the off-the-shelf components out there in the world. If you selected a framework because of that vast library of existing components, that can be a deal-killer, leaving you in a position in which you can _either_ write something that reliably works for your users _or_ writing something that’s easy to develop.

With progressive enhancement, we’re often pushing logic from the front-end to the back-end (where it’s more reliable). As a consequence, we’re usually writing simpler JavaScript, which makes it easier to forego any framework and just write “vanilla” JavaScript. These scripts can be hand-crafted for our needs, which can also make our pages far more performant.

But there are a few methods we find ourselves using over and over again in such projects. This library is a collection of such methods, so you can focus on the functionality that is unique to your application.
