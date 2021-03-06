import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item
export default class TrendBlock extends Component {

  generateParagraph() {
    
    var completedParagraph = null
    var newParagraph = []

    var paragraphSentenceLength = Math.floor(( Math.random() * (10-5) )+5);

    for (var i = 0; i < paragraphSentenceLength; i++) {
    		var paragraphSentence = this.generateSentence()
    		newParagraph.push( paragraphSentence )
    };
    completedParagraph = this._stringifyNewParagraph(newParagraph)

    return (
      <p className="trends">{completedParagraph}</p>
    )

  };

  render() {
    return (
      <div>{this.generateParagraph()}</div>
    );
  }

  componentDidMount() {
  	$(".trends").textillate({ in: { effect: 'fadeInUp', shuffle: true, delayScale: 0.5, delay: 25 } })

  }


  _stringifyNewParagraph(array) {
  	newParagraphString = array.join(' ')
  	return(
  	 newParagraphString
  	)
  };




  paragraphGeneration() {
  	$("#ipsum-canvas").empty()

  	for (var i = 0; i < numberParagraphs; i++) {
  			var finishedParagraph = generateParagraph()
  			$("#ipsum-canvas").append("<div><p>"+ finishedParagraph+"</p></div>")
  	};
  };



  generateSentence() {

  	var completedSentence = null
  	var newSentence = []
  	// get number of words in each sentence randomally
  	var sentenceWordLength = Math.floor(( Math.random() * (19-9) )+9);
  	
  	// Get new word X time - - -  X number of times where X = sentenceWordLength
  	for (var i = 0; i < sentenceWordLength; i++) {

		var newWord = this._generateStylizedLatinWord()
  		
  		newSentence.push( newWord )
  	};

  	completedSentence = this._stringifySentence(newSentence);

  	return(
  	 completedSentence
  	)
  };


  _getRandomWord() {

  	let trendArray = Session.get("returnedTrends")
   	// get random number between 0 and wordList.length
  	var randomWordValue = Math.floor((Math.random() * trendArray.length)+0);
  	// Convert randomWordValue into actual word
  	randomWord = trendArray[randomWordValue].toLowerCase()
  	randomWord = this._wordStrip( randomWord )

  	return(
  	 randomWord
  	)
  };

  _wordStrip( word ) {
  	word = this._wordStripPunctuation( word )
  	word = this._wordStripUnderscores( word )
  	word = this._wordConvertNumbers( word )

  	return(
  	 word
  	)
  }

  _wordStripPunctuation( word ) {
  	word = word.replace(/[^\w\s\-]/g, '')
  	return(
  	 word
  	)
  }

  _wordStripUnderscores( word ) {
  	word = word.replace(/[\_]/g, '')
  	return(
  	 word
  	)
  }

  _wordConvertNumbers( word ) {

  	var numbers = word.match(/[\d]+/g)  	
  	if (numbers) { 
	  	for(var i = 0; i < numbers.length; i++){
	  		var number = numbers[i];
	  		var romanNumeral = roman_converter( number );
	  		romanNumeral = " "+romanNumeral+" " // just in case number in the middle of the word
	  		word = word.replace(number, romanNumeral);
	  	}
	  	word = word.trim();
	}
  	
  	return(
  	 word
  	)
  }




  _stringifySentence(array) {
  	

  	newString = array.join(' ');

  	newString = this._capitalizeFirstLetter(newString);  
  	newString = newString + ".";

  	return(
  	 newString
  	)
  };




  _capitalizeFirstLetter( word ) {
  	console.log( word )
  	var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
  	return(
  	 capitalizedWord
  	)

  };



  _generateStylizedLatinWord(){
  	tripleSidedCoinFlip = Math.floor((Math.random() * 3)+0)

  	if(tripleSidedCoinFlip == 0){
  		newLatinifiedWord =  this._getRandomWord()
  	}else if(tripleSidedCoinFlip == 1){
  		// 
  		newLatinifiedWord = this._generateRandomLatinIpsumWord()
  		// console.log(newLatinifiedWord)
  		// 
  	}else if(tripleSidedCoinFlip == 2){
  		newLatinifiedWord = this.theEnglishLatinCrossHybridizationOfDoctorMoreau()
  	}

  	return(
  	 newLatinifiedWord
  	)
  };



  _generateRandomLatinIpsumWord(){
  	latinArray = this.loremIpsumArray() 

  	randomArrayValue = Math.floor((Math.random() * latinArray.length)+0)

  	latinWord = latinArray[ randomArrayValue ]

  	return(
  	 latinWord
  	)
  };



  theEnglishLatinCrossHybridizationOfDoctorMoreau(){

  	// Call endings array and pick a random latin ending
  	endingsArray = this.popularLatinWordEndings()
  	selectedEnding = endingsArray[ Math.floor((Math.random() * endingsArray.length)+0) ]

  	// Generate consonants array and pick a random latin consonant
  	popularLatinConsonants = ["t", "s", "qu", "ch", "r", "n", "m", "ct", "rp", "g", "d", "x", "pat", "nt"]
  	selectedConsonant = popularLatinConsonants[ Math.floor((Math.random() * popularLatinConsonants.length)+0) ]

  	// Generate baseword
  	baseWord = this._getRandomWord()
  	// console.log(baseWord)
  	// Set variable to check if word ends in vowel
  	baseWordLastLetter = baseWord.charAt(baseWord.length - 1)

  	if( baseWordLastLetter.match(/[y]/) ){
  		// replace last letter y with i and concat with consonant and ending
  		trimmedBaseWord = baseWord.substring(0, baseWord.length - 1)
  		latinifiedWord = trimmedBaseWord.concat("i", selectedConsonant, selectedEnding)
  		// 
  	}else if( baseWordLastLetter.match(/[aeiou]/) ){
  		latinifiedWord = baseWord.concat(selectedConsonant, selectedEnding)
  	}else{
  		latinifiedWord = baseWord.concat(selectedEnding)
  	}

  	return(
  	 latinifiedWord
  	)
  };

  loremIpsumArray() {
    return(
      ["Lorem", "ipsum", "dolor", "sit", "amet", "has", "exerci", "fastidii", "volutpat", "no", "ei", "perfecto", "indoctum", "sea", "sea", "reque", "epicuri", "luptatum", "ea", "An", "natum", "tamquam", "perfecto", "est", "vivendum", "voluptatum", "vix", "ea", "cum", "eu", "iriure", "audire", "Quo", "ei", "wisi", "omnes", "nonumes", "duo", "omnium", "euismod", "mentitum", "no", "Sit", "cu", "viris", "hendrerit", "Quod", "accusamus", "torquatos", "mea", "et", "In", "nec", "omnis", "fugit", "laoreet", "no", "sanctus", "singulis", "delicata", "has", "pri", "posse", "iusto", "splendide", "cu", "Pri", "electram", "disputationi", "interpretaris", "id", "Everti", "utroque", "mei", "te", "id", "sit", "mentitum", "antiopam", "qualisque", "Usu", "ut", "aeterno", "patrioque", "prodesset", "vel", "eu", "sint", "vituperatoribus", "Has", "reque", "option", "euripidis", "cu", "In", "persecuti", "disputando", "pro", "est", "eros", "omittantur", "an", "vel", "ei", "graeco", "sanctus", "ullamcorper", "Feugait", "sapientem", "id", "sea", "per", "an", "harum", "ubique", "et", "sea", "quot", "recusabo", "Graeci", "invenire", "adolescens", "eam", "at", "Choro", "admodum", "mentitum", "ex", "pro", "Ne", "duo", "consulatu", "elaboraret", "appetere", "ponderum", "at", "his", "Qui", "at", "suas", "adhuc", "ea", "sea", "alia", "putent", "Per", "at", "mollis", "nonumes", "Ei", "ius", "legendos", "laboramus", "An", "choro", "viderer", "aliquid", "vel", "Dicat", "debitis", "vel", "in", "in", "eam", "molestie", "recteque", "forensibus", "Dico", "ipsum", "ea", "pro", "Mel", "eu", "modus", "integre", "dissentiunt", "iisque", "vidisse", "oblique", "pri", "eu", "An", "eos", "erat", "utinam", "noluisse", "idque", "vidisse", "fastidii", "te", "vis", "Viris", "reformidans", "in", "usu", "mei", "hinc", "reque", "inermis", "in", "Ad", "appellantur", "intellegebat", "has", "Mei", "at", "meis", "honestatis", "id", "labores", "accusam", "voluptatum", "pro", "Has", "id", "veritus", "tincidunt", "cotidieque", "Errem", "percipit", "tincidunt", "an", "nec", "quo", "id", "delenit", "pericula", "Vel", "in", "saepe", "cetero", "est", "ea", "etiam", "mucius", "imperdiet", "vulputate", "cum", "no", "No", "duo", "civibus", "maluisset", "sed", "consulatu", "cotidieque", "ex", "ex", "vis", "perfecto", "senserit", "Augue", "conceptam", "ne", "vim", "usu", "vidit", "aperiri", "in", "Pro", "posse", "pericula", "te", "quo", "ut", "ubique", "aeterno", "assentior", "Vel", "lobortis", "reprehendunt", "no", "duo", "eu", "quas", "dicit", "partiendo", "Dolorem", "omittam", "patrioque", "ex", "duo", "vidit", "brute", "eu", "mea", "Te", "illud", "posse", "solet", "cum", "ut", "sed", "illum", "falli", "antiopam", "Gloriatur", "mediocritatem", "no", "his", "his", "ex", "vero", "recteque", "splendide", "per", "ex", "ullum", "fastidii", "accommodare", "Tollit", "deleniti", "suavitate", "at", "per", "at", "usu", "soleat", "admodum", "facilisis", "Quo", "dicam", "docendi", "ponderum", "ne", "qui", "nibh", "referrentur", "no", "At", "has", "abhorreant", "dissentiet", "concludaturque", "has", "hinc", "scaevola", "et", "Exerci", "vivendum", "neglegentur", "ea", "est", "quo", "cu", "adhuc", "iracundia", "Habeo", "suavitate", "duo", "in", "usu", "movet", "vocent", "conclusionemque", "ut", "nostro", "nominati", "nam", "eu", "Eu", "mundi", "sadipscing", "quo", "te", "quo", "sint", "legere", "copiosae", "congue", "utinam", "facilis", "eu", "nec", "Cu", "mel", "dolores", "lobortis", "has", "ea", "tincidunt", "voluptaria", "eu", "option", "aliquam", "sit", "Id", "cum", "summo", "verear", "dico", "legimus", "ceteros", "mel", "ex", "Numquam", "vivendum", "definitiones", "at", "mel", "an", "doming", "ocurreret", "sea", "Cu", "suas", "nostrum", "nam", "est", "ne", "maluisset", "iracundia", "Ea", "eos", "zril", "deseruisse", "labore", "philosophia", "qui", "in", "erat", "augue", "iisque", "his", "at", "An", "eam", "dicant", "eirmod", "ne", "per", "congue", "maiorum", "accumsan", "malis", "eloquentiam", "est", "ei", "Vim", "ei", "insolens", "adipiscing", "voluptatibus", "mea", "id", "apeirian", "disputationi", "libris", "sapientem", "splendide", "ut", "eum", "Sit", "labitur", "antiopam", "te", "sit", "no", "idque", "adversarium", "duo", "nonumes", "hendrerit", "ad", "Te", "diam", "nostro", "mediocritatem", "est", "cu", "tation", "scripserit", "disputando", "mei", "etiam", "volumus", "sed", "ea", "Te", "prima", "vitae", "pri", "at", "sed", "partem", "feugait", "partiendo"]
    )
  };

  popularLatinWordEndings (){
    return (
      ["a", "ae", "aram", "as", "is", "us", "e", "orum", "i", "o", "ius", "ii", "ium", "ios", "iorum", "iis", "ia", "os", "om", "es", "em", "ibus", "im", "uum", "erum", "ebus", "tri", "eorum", "eis", "ius", "ix", "ii", "atrix", "ator"]
    )
  };


}
 
TrendBlock.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  paragraph: PropTypes.object.isRequired,
};