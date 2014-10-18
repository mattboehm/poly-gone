// Saves options to chrome.storage
function save_options() {
  chrome.storage.sync.set({
    titlePatternCaseInsensitive: document.getElementById('titlePatternCaseInsensitive').checked,
    titlePattern: document.getElementById('titlePattern').value,
	imageUrl: document.getElementById('imageUrl').value,
	replacementTitle: document.getElementById('replacementTitle').value,
	replacementText: document.getElementById('replacementText').value,
	opacity: document.getElementById('opacity').value
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    titlePattern: 'destiny',
	imageUrl: '',
	replacementTitle: '',
	replacementText: '',
	opacity: "1",
    titlePatternCaseInsensitive: true
  }, function(items) {
    document.getElementById('titlePattern').value = items.titlePattern;
	document.getElementById('imageUrl').value = items.imageUrl;
	document.getElementById('replacementTitle').value = items.replacementTitle;
	document.getElementById('replacementText').value = items.replacementText;
	document.getElementById('opacity').value = items.opacity;
    document.getElementById('titlePatternCaseInsensitive').checked = items.titlePatternCaseInsensitive;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);