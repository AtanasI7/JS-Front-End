document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const encodingformEl = document.getElementById('encode');
    const decodingformEl = document.getElementById('decode');

    encodingformEl.addEventListener('submit', handleTextEncode);
    decodingformEl.addEventListener('submit', handleTextDecode);

    function handleTextEncode(e) {
        e.preventDefault();
        
        const encodeTextareaInputEl = encodingformEl.querySelector('textarea');
        const decodeTextareaInputEl = decodingformEl.querySelector('textarea');

        let encodedMessage = '';
        const text = encodeTextareaInputEl.value;

        for (let i = 0; i < text.length; i++) {
            encodedMessage += String.fromCharCode(text.charCodeAt(i) + 1);
        }

        decodeTextareaInputEl.value = encodedMessage;
        encodeTextareaInputEl.value = '';
    }

    function handleTextDecode(e) {
        e.preventDefault();

        const encodeTextareaInputEl = encodingformEl.querySelector('textarea');
        const decodeTextareaInputEl = decodingformEl.querySelector('textarea');

        let decodedMessage = '';
        const text = decodeTextareaInputEl.value;

        for (let i = 0; i < text.length; i++) {
            decodedMessage += String.fromCharCode(text.charCodeAt(i) - 1);
        }

        decodeTextareaInputEl.value = decodedMessage;

    }
}