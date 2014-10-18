Poly-gone
=========

A chrome extension to hide articles on polygon.com.

Why Polygon?
------------
This concept could just as easily be extended to any site, but polygon.com happens to be my personal favorite site for gaming news. That being said, there are many subjects (i.e. consoles/games I never plan on owning) that I know I'll never care to read about. I've noticed many people complaining about seeing content they're not interested, so I decided to make a tool that tries to help.

Aren't There Better Solutions?
------------------------------
This approach is pretty hackish and there are certainly other ways to regulate which articles you see. For instance, you could use a service like feedrinse.com to filter rss feeds. Ideally, polygon.com would tag all of its stories and provide a way for users to hide certain tags.

Known Issues
------------
You may notice images flickering on replaced stories. This happens (AFAICT) because the site tries to lazy-load images using a technique that resets the image style when scrolling. I'm sure there are ways to fix this, but as they likely involve very invasive approaches, I wanted to hold off on that for now. If it bugs you, you can try setting the opacity to 0 instead.
