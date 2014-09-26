if ( window.LanguageConverter === undefined ) {
	window.LanguageConverter = {};
}
// Define specific configuration for English Wikipedia
window.LanguageConverter.config = {
	msg: {
		error_missing_dict	 : 'The following dictionary was not found:\n',
		error_missing_dict_name : 'It is necessary to define the page name of the dictionary for ',
		error_word_processing	 : 'Error has occurred while processing the following word:\n',
		error_typo_processing	 : 'Error has occurred while processing the following typographic change:\n',
		help_page_link		 : 'Open help page',
		show_changes_link	 : 'Show changes',
		hide_changes_link	 : 'Hide changes',
		menu_title		 : 'Variants'
	},

	/**
	* What characters are considered part of words
	* Do you need every character in this list? Any other?
	*/
	word_chars	 : 'a-zA-Z\'-',

	/**
	* Names of each language and/or variant to which conversion is enabled
	* in the current wiki
	*/
	variants_list : {
		'en':'Original spellings', // Default language == mw.config.get('wgContentLanguage')
		'en-gb':'British spellings',
		'en-us':'American spellings'
	},

	/**
	* Typographic conversion (applied before dictionary conversion)
	* Accepts regular expressions
	*/
	typo_changes : {
		/*
		// Each variant can have its own list of typographic conversions to be performed
		'en-gb': [
			[ 'just an', 'example' ],
			[ 'another', 'example' ]
		],
		'en-us': [
			[ /one more/g, 'example' ]
		]
		*/
	},

	/**
	* List of namespaces where conversion is enabled.
	* The exact behavior depends on selection_mode and
	* the presence of an element whose id attribute is
	* the value of local_dic_id
	*/
	ns_list : {
		'0': true, // Main
		'2': true, // User
		'4': true, // Wikipedia
		'12': true, // Help
		'14': true, // Category
		'100': true // Portal
	},

	/**
	* Id used in templates or wikitext:
	* 1) To enable conversion to some variant; and/or
	* 2) To define local dictionaries (valid through a specific article)
	*/
	local_dic_id : {
		'en':'lang-conv',
		'en-gb':'local-dic-GB',
		'en-us':'local-dic-US'
	},
	/**
	* Class used in template or wikitext to disable conversion
	* of the content inside of an HTML element
	*/
	no_conversion_class : 'no-conversion',

	/**
	* Pages of current wiki where the dictionaries for each variant should be defined
	*/
	global_dic_page : {
		'en-gb':'Wikipedia:WikiProject User scripts/Scripts/Language Converter/Dictionary/en-GB',
		'en-us':'Wikipedia:WikiProject User scripts/Scripts/Language Converter/Dictionary/en-US'
	},

	/**
	* Help page about the conversion system
	*/
	help_page	 : 'Wikipedia:WikiProject User scripts/Scripts/Language Converter',

	/**
	* Enables the addition of a span around each converted expression
	* (for dictionary, not typographic conversion)
	*/
	show_changes	 : false,

	/**
	* Enables the exibition of the text of selected item in the menu title
	*/
	show_menu_title	 : true,

	/**
	* Defines how to select pages where the conversion is enabled
	*/
	selection_mode	 : 'OR',

	/**
	* How many words in sequence can be converted as a "phrase"
	*/
	max_seq		 : 3
}; // Config

// Import [[oldwikisource:User:He7d3r/Tools/LanguageConverter.js]] to allow language conversion
mw.loader.load( '//wikisource.org/w/index.php?title=User:He7d3r/Tools/LanguageConverter.js&action=raw&ctype=text/javascript' );