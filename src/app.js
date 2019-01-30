 function toggleForm() {
     document.getElementById('form').classList.toggle('hidden')
 } 

const renderContacts = () => {
    const storage = window.localStorage
    const contacts = JSON.parse(storage.getItem('contacts'))

    let div = document.querySelector('.contact-list')

    if (contacts) {
        div.innerHTML = ''
        const ul = document.createElement('ul')
        ul.className = 'list-reset'
        
        contacts.forEach(contact => {
            let li = document.createElement('li')
            li.className = 'list-reset'
            li.innerHTML = `
            <div class="container bg-grey opacity-75 mb-4 card">
                <div class="content">
                    <p>Name: ${contact.name}<p>
                    <p>Company: ${contact.company}<p>
                    <p>Note: ${contact.notes}</p>
                    Email: ${contact.email} | Twitter
                    <a href="https://www.twitter.com/${contact.twitter}">@${contact.twitter}</a>
                </div>
            </div>    
         `
        ul.appendChild(li)                        
        })

        div.appendChild(ul)
    } else {
        div.innerHTML = '<p>You have no contacts in your address book</p>'
    }
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formButton').addEventListener('click',toggleForm)
    renderContacts()
    const addContactForm = document.querySelector('.new-contact-form')
    
    addContactForm.addEventListener('submit', event => {
        event.preventDefault()
        const storage = window.localStorage

        const {
            name,
            email,
            phone,
            company,
            notes,
            twitter,
        } = addContactForm.elements
        
        const contact = {
            id: Date.now(),
            name: name.value,
            email: email.value,
            phone: phone.value,
            company: company.value,
            notes: notes.value,
            twitter: twitter.value
        }

        
        console.log(`Saving the following contact: ${JSON.stringify(contact)}`)
        let contacts = JSON.parse(storage.getItem('contacts')) || []
        contacts.push(contact)
        storage.setItem('contacts', JSON.stringify(contacts))
        renderContacts()
        addContactForm.reset()
        toggleForm()
    })
})
