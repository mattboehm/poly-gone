chrome.extension.sendMessage({}, function(response) {
	chrome.storage.sync.get({
		titlePattern: 'destiny',
		titlePatternCaseInsensitive: true,
		imageUrl: '',
		replacementTitle: '',
		replacementText: '',
		opacity: 1
	}, function(settings) {
		//How many milliseconds between checks to see if contents should be replaced
		var REFRESH_RATE = 300;
		//A regex that matches against "bad" titles
		var titlePattern = new RegExp(settings.titlePattern, settings.titlePatternCaseInsensitive?"i":"");
		//imageStyle is a css style applied to the "image" element.
		//the image element is a div that currently has the style background-image:url(<url>)
		var imageStyle;
		if (settings.imageUrl) {
			imageStyle = "background-image: url("+settings.imageUrl+")";
		} else {
			imageStyle = "background-image: none";
		}
		
		var shouldReplace = function(entry){
			var titleText = $(entry.title).text();
			return (!!(titleText.match(titlePattern))) || (titleText === settings.replacementTitle);
		};

		var fixTitle = function(title){
			$(title).text(settings.replacementTitle);
		};
		var fixText = function(text){
			$(text).text(settings.replacementText);
		};
		//entry is the element with the "background-image" style
		var fixImage = function(image){
			if (imageStyle) {
				//TODO images are lazily loaded so their style might not be set yet.
				$(image).attr("style", imageStyle);
				$(image).attr("data-original", settings.imageUrl);
			}
		};
		var replaceEntry = function(entry){
			fixTitle(entry.title);
			if (entry.text) {
				fixText(entry.text);
			}
			if (entry.image) {
				fixImage(entry.image);
			}
			if (parseInt(settings.opacity) < 1){
				$(entry.entry).css("opacity", settings.opacity);
			}
		};
		var getEntries = function() {
			entries = [];
			$(".m-hero__entry").each(function(i, entry){
				entries.push({
					entry: entry,
					title: $("h2>a", entry),
					image: entry
				});
			});
			$(".block").each(function(i, entry){
				entries.push({
					entry: entry,
					title: $("h2>a", entry),
					text: $(".copy", entry),
					image: $(".block_img", entry)
				})
			});
			$(".m-link-set__item").each(function(i, entry){
				entries.push({
					entry: entry,
					title: $(">a", entry),
					image: $(".m-link-set__image", entry)
				})
			});
			$(".m-rail-component__list__item").each(function(i, entry){
				entries.push({
					entry: entry,
					title: $(">a", entry)
				});
			});
			return entries;
		}
		var replaceMatching = function(entries){
			$.each(entries, function(i, entry){
				if (shouldReplace(entry)) {
					replaceEntry(entry);
				}
			});
		};
		var replaceAllMatchingEntries = function(){
			replaceMatching(getEntries());
		};
		
		replaceAllMatchingEntries();
		var scrollPos = $(document.body).scrollTop()+$(window).height();
		setInterval(function(){
			var newScrollPos = $(document.body).scrollTop()+$(window).height();
			if(newScrollPos !== scrollPos){
				scrollPos = newScrollPos;
				replaceAllMatchingEntries();
			}
		}, REFRESH_RATE);
	});
});