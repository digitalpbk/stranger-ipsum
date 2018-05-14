// Code that generators the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the words property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
      "കുറാപ്പുകെ വിഴിമറിവ്യവമിട്ടാൽ പിണി പ്രഷേന്ന്യ ശുഭലീപക്ഷം.",
      "പന്തല ചിത്യേനെ രാഗരിഗ പകാങ്കില തരുമുരു കരുക്കിത മനീക്കിതാണ്.",
      "രാമക്കയത്തിൽ പൂപ്പ വിരാഗമായപ്പോൾ കിന്നെ വന്ന പൈനാകുറ്റൂര് താരപ്രമേ അടുത്ത മിഴുവുവേളകൾക്കായി പുനഃപരിപ്രമാണിയായി.",
      "ഈ അശ്ലീല പൊസ്റ്റ് നിരോധിക്കുക!",
      "നിപ്ര മ തുരേമ തിമത്ത തുല തുകര തുമത തമര്യ തുലമത തമസ്വനേ.",
      "സൂർപൂണുകാരേ എമിയരങ്ങുമ്പോൾ ലോപന മലയപ്രമാണം ദൃശരവം തോമാങ്ങാ തിണതാനം.",
      "ടൈപ്‌ഫേസ് ഡിസൈൻ ചെയ്യുമ്പോൾ ഡിസൈൻ ചെയ്ത അക്ഷരങ്ങൾ മാത്രം എടുത്ത് റാൻഡം ആയി കുറേ വാക്കുകൾ ടെസ്റ്റ് ചെയ്യുന്നത് സാധാരണമാണ്. ",
      "രാജാ പിണറായി എന്നൊക്കെ കാണുന്നുണ്ട്. വല്ല പത്രവാർത്തയുമാവും അല്ലെ?",
	  //Add more here
   ];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = "";
  // Set the minimum number of words
  let minimumCharacterLength = 250;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(" " + this.getRandomSentence());
    }
  }
  return paragraph;
}

// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += "<p>" + paragraph + "</p>";
  });
  return paragraphHTML;
}

module.exports = loremIpsum;
