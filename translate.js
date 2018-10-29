var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/github/gi, 'Versionskontrollzentrum');
            replacedText = replacedText.replace(/branches/gi,'Zweige');
            replacedText = replacedText.replace(/branch/gi,'Zweig');
            replacedText = replacedText.replace(/Branch/gi,'Zweig');
            replacedText = replacedText.replace(/Pull requests/gi,'Zug Anfragen');
            replacedText = replacedText.replace(/New pull request/gi,'Neue Zug Anfrage');
            replacedText = replacedText.replace(/commits/gi,'Verpflichtungen');
            replacedText = replacedText.replace(/commit/gi,'Verpflichtung');
            replacedText = replacedText.replace(/feature/gi,'Merkmal');
            replacedText = replacedText.replace(/Issues/gi,'Probleme');
            replacedText = replacedText.replace(/Projects/gi,'Vorhaben');
            replacedText = replacedText.replace(/Marketplace/gi,'Marktplatz');
            replacedText = replacedText.replace(/Explore/gi,'Erkunden');
            replacedText = replacedText.replace(/Unwatch/gi,'Wegschauen');
            replacedText = replacedText.replace(/Unwatch/gi,'Wegschauen');
            replacedText = replacedText.replace(/Not Watching/gi,'Wegschauen');
            replacedText = replacedText.replace(/Watching/gi,'Hinschauen');
            replacedText = replacedText.replace(/Ignoring/gi,'ignorieren');
            replacedText = replacedText.replace(/Watch/gi,'Hinschauen');
            replacedText = replacedText.replace(/Unstar/gi,'Entsternen');
            replacedText = replacedText.replace(/Star/gi,'Sternen');
            replacedText = replacedText.replace(/Fork/gi,'Gabeln');
            replacedText = replacedText.replace(/Merge pull request/gi,'Verschmelze Zuganfrage');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
