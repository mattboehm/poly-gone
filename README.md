Poly-gone
=========
A chrome extension to hide articles on polygon.com. Simply provide a javascript regular expression to match against (i.e. destiny|xbox) and any articles with matching titles will be modified. By default, the title/text/photo are removed, but these can also be replaced with new values.

See screenshots of it in action at http://imgur.com/a/JI9Eo.

Why Polygon?
------------
This concept could just as easily be extended to any site, but polygon.com happens to be my personal favorite site for gaming news. That being said, there are many subjects (i.e. consoles/games I never plan on owning) that I know I'll never care to read about. I've noticed many people complaining about seeing content they're not interested in, so I decided to make a tool that tries to help.

Aren't There Better Solutions?
------------------------------
This approach is pretty hackish and there are certainly other ways to regulate which articles you see. For instance, you could use a service like feedrinse.com to filter rss feeds. Ideally, polygon.com would tag all of its stories and provide a way for users to hide certain tags.

Known Issues
------------
You may notice images flickering on replaced stories. This happens (AFAICT) because the site tries to lazy-load images using a technique that resets the image style when scrolling. I'm sure there are ways to fix this, but they likely involve very invasive approaches. If it bugs you or you have suggestions on how to handle this, please comment on issue #1 and consider setting the opacity to 0 instead.
