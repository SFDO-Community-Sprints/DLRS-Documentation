document.addEventListener('DOMContentLoaded', function (event) {
    //create the modal
    //Add modal to the document
    const imageModal = document.createElement('div');
    imageModal.setAttribute('id', 'imageModal');
    const imageModalCloseButton = document.createElement('div');
    imageModalCloseButton.innerHTML = '&times;';
    imageModalCloseButton.setAttribute('id', 'modal-close');
    imageModal.appendChild(imageModalCloseButton);
    const imageModalImage = document.createElement('img');
    imageModalImage.setAttribute('id', 'modal-image');
    imageModal.appendChild(imageModalImage);
    const imageModalCaption = document.createElement('div');
    imageModalCaption.setAttribute('id', 'modal-caption');
    imageModal.appendChild(imageModalCaption);
    document.body.appendChild(imageModal);

    const contentImages = document.querySelectorAll('#main-content img');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    contentImages.forEach(function (img) {
        img.classList.add('imagePopout');
        img.onclick = function () {
            imageModal.style.display = "block";
            imageModalImage.src = img.src;
            if (img.alt) {
                imageModalCaption.innerHTML = img.alt;
            }
        }
    });

    imageModalCloseButton.onclick = function () {
        imageModal.style.display = "none";
    }

    setIframeVideo()

    openDetailsForHash();
    window.addEventListener('hashchange', openDetailsForHash);
});

// If the URL fragment targets an element inside a closed <details> (e.g. a
// deep link to a collapsed cookbook recipe), expand it so the browser can
// scroll there. Chrome does this natively; Firefox/Safari don't reliably.
function openDetailsForHash() {
    if (!location.hash || location.hash.length < 2) return;
    let target;
    try {
        target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    } catch (e) {
        return;
    }
    if (!target) return;
    let details = target.closest('details');
    let opened = false;
    while (details) {
        if (!details.open) {
            details.open = true;
            opened = true;
        }
        details = details.parentElement && details.parentElement.closest('details');
    }
    // Re-scroll: on initial load the browser may have given up while the
    // target was still display:none inside the closed details.
    if (opened) {
        target.scrollIntoView();
    }
}

function setIframeVideo() {
    const contentIFrames = document.querySelectorAll('#main-content iframe');
    let mainContentWidth = getContentWidth(document.getElementById('main-content'));
    contentIFrames.forEach(function (frame) {
        if (frame.src.includes('youtube.com')) {
            frame.width = mainContentWidth + 'px';
            frame.height = mainContentWidth * 9 / 16 + 'px';
        }
    });
}

window.onresize = setIframeVideo;

function getContentWidth(element) {
    let styles = getComputedStyle(element)
    return element.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight)
}