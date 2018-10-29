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
            replacedText = replacedText.replace(/New pull request/gi,'Neue Zug Anfrage');
            replacedText = replacedText.replace(/commits/gi,'Verpflichtungen');
            replacedText = replacedText.replace(/feature/gi,'Merkmal');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
