// Define the Morse code alphabet
const morseAlphabet = {
	'A': '.-', 
	'B': '-...', 
	'C': '-.-.', 
	'D': '-..', 
	'E': '.', 
	'F': '..-.', 
	'G': '--.', 
	'H': '....', 
	'I': '..', 
	'J': '.---', 
	'K': '-.-', 
	'L': '.-..', 
	'M': '--', 
	'N': '-.', 
	'O': '---', 
	'P': '.--.', 
	'Q': '--.-', 
	'R': '.-.', 
	'S': '...', 
	'T': '-', 
	'U': '..-', 
	'V': '...-', 
	'W': '.--', 
	'X': '-..-', 
'Y': '-.--', 
'Z': '--..', 
'0': '-----', 
'1': '.----', 
'2': '..---', 
'3': '...--', 
'4': '....-', 
'5': '.....', 
'6': '-....', 
'7': '--...', 
'8': '---..', 
'9': '----.', 
'.': '.-.-.-', 
',': '--..--', 
'?': '..--..', 
"'": '.----.', 
'!': '-.-.--', 
'/': '-..-.', 
'(': '-.--.', 
')': '-.--.-', 
'&': '.-...', 
':': '---...', 
';': '-.-.-.', 
'=': '-...-', 
'+': '.-.-.', 
'-': '-....-', 
'_': '..--.-', 
'"': '.-..-.', 
'$': '...-..-', 
'@': '.--.-.'
}

// Define the reverse Morse code alphabet
const reverseMorseAlphabet = {}
for (const [key, value] of Object.entries(morseAlphabet)) {
reverseMorseAlphabet[value] = key
}

// Get input and output elements
const input = document.getElementById('input')
const output = document.getElementById('output')

// Get buttons
const translateToMorseButton = document.getElementById('translate-to-morse')
const translateToTextButton = document.getElementById('translate-to-text')
const playMorseButton = document.getElementById('play-morse')

// Function to translate text to Morse code
function textToMorse(text) {
// Convert text to uppercase
text = text.toUpperCase()


// Split text into individual characters
const characters = text.split('')

// Translate each character to Morse code and join them together
const morse = characters.map((character) => {
	if (morseAlphabet[character]) {
		return morseAlphabet[character]
	} else {
		return ''
	}
}).join(' ')

return morse
}

// Function to translate Morse code to text
function morseToText(morse) {
// Split Morse code into individual codes
const codes = morse.split(' ')// Translate each code to a character and join them together
const text = codes.map((code) => {
	if (reverseMorseAlphabet[code]) {
		return reverseMorseAlphabet[code]
	} else {
		return ''
	}
}).join('')

return text
}

// Function to play Morse code as audio
function playMorse(morse) {
// Create an AudioContext and oscillator
const audioContext = new AudioContext()
const oscillator = audioContext.createOscillator()// Set the frequency and type of the oscillator
oscillator.frequency.setValueAtTime(600, audioContext.currentTime)
oscillator.type = 'sine'

// Create a gain node to control the volume
const gainNode = audioContext.createGain()
gainNode.gain.setValueAtTime(0, audioContext.currentTime)

// Connect the oscillator and gain node to the AudioContext destination
oscillator.connect(gainNode)
gainNode.connect(audioContext.destination)

// Loop through each Morse code and turn the oscillator on and off accordingly
let time = audioContext.currentTime
for (let i = 0; i < morse.length; i++) {
	if (morse[i]

        == '.') {
            // Dot
            gainNode.gain.setValueAtTime(1, time)
            time += 0.1
            gainNode.gain.setValueAtTime(0, time)
            time += 0.1
            } else if (morse[i] == '-') {
            // Dash
            gainNode.gain.setValueAtTime(1, time)
            time += 0.3
            gainNode.gain.setValueAtTime(0, time)
            time += 0.1
            } else {
            // Space between letters
            time += 0.3
            }
            }
            }
            
            // Function to handle click on Translate to Morse button
            function translateToMorseClick() {
            const text = input.value
            const morse = textToMorse(text)
            output.value = morse
            }
            
            // Function to handle click on Translate to Text button
            function translateToTextClick() {
            const morse = input.value
            const text = morseToText(morse)
            output.value = text
            }
            
            // Function to handle click on Play Morse button
            function playMorseClick() {
            const morse = input.value
            playMorse(morse)
            }
            
            // Add event listeners to buttons
            translateToMorseButton.addEventListener('click', translateToMorseClick)
            translateToTextButton.addEventListener('click', translateToTextClick)
            playMorseButton.addEventListener('click', playMorseClick)
