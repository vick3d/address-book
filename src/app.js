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
            <div class="max-w md w-full lg:flex">
<<<<<<< HEAD
             <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('http://www.valleyroadwines.com/wp-content/uploads/2013/04/Anon-Person.png')" title="Picture">
=======
                <div class="h-48 mb-2 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('http://www.valleyroadwines.com/wp-content/uploads/2013/04/Anon-Person.png')" title="Picture">
>>>>>>> 5a5087a589cd9ed8fa0489543c80484bac961449
            </div>
              <div class="w-1/6 mb-2 border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 pr-1 flex flex-col justify-between leading-normal">
                  <div class="mb-8">
                    <p class="flex justify-between text-black font-bold text-xl">
                    ${contact.name}
                    <button class="deleteButton -mt-4"><i class="material-icons flex justify-between -mt-4">close</i></button>
                    </p>
               <div class="text-m text-grey-darkest flex items-center">${contact.company}</div>
                <p class="text-grey-darker text-xs">${contact.notes}</p>
                </div>
                <div class="flex items-center">
                    <div class="text-sm">
                        <p class="text-black leading-none"> Phone: ${contact.phone}</p>
                        <p class="text-black leading-none"> Email: ${contact.email}</p>
                        <a href="https://www.twitter.com/${contact.twitter}">@${contact.twitter}</a>
                    </div>
                </div>
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
