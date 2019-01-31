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
             <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('')" title="Picture">
            </div>
              <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
               <div class="mb-8">
                <p class="text-sm text-grey-dark flex items-center">
                 Something
                </p>
                <div class="text-black font-bold text-xl mb-2"> something else</div>
                <p class="text-grey-darker text-base">something something</p>
                </div>
                <div class="flex items-center">
                    <div class="text-sm">
                        <p class="text-black leading-none"> name here?</p>
                        <p class="text-grey-dark">something</p>
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
