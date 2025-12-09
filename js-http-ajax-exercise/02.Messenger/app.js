const textareaInputEl = document.getElementById('messages');
const nameInputEl = document.querySelector('input[name=author]');
const messageInputEl = document.querySelector('input[name=content]');
const sendBtnEl = document.getElementById('submit');
const refreshBtnEl = document.getElementById('refresh');


function attachEvents() {
    sendBtnEl.addEventListener('click', handleSendMessage);
    refreshBtnEl.addEventListener('click', handleAllMessages);

    async function handleSendMessage(e) {
        const createRes = await fetch('http://localhost:3030/jsonstore/messenger', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author: nameInputEl.value.trim(),
                content: messageInputEl.value.trim()
            })
        });
        const createData = await createRes.json();
        
        console.log(createData);
        
        nameInputEl.value = '';
        messageInputEl.value = '';
    }

    async function handleAllMessages(e) {
        const messagesRes = await fetch('http://localhost:3030/jsonstore/messenger');
        const messagesData = await messagesRes.json();

        const allMessagesObj = Object.values(messagesData)

        for (const messageObj of allMessagesObj) {
            const newMessage = `${messageObj.author}: ${messageObj.content}\n`;

            textareaInputEl.value += newMessage; 
        } 
    }
}

attachEvents();