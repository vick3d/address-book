const storage = window.localStorage 
 
 function toggleForm() {
     document.getElementById('form').classList.toggle('hidden')
 } 

const renderContacts = () => {
    
    const contacts = JSON.parse(storage.getItem('contacts'))

    let div = document.querySelector('.contact-list')

    if (contacts) {
        div.innerHTML = ''
        const mainDiv = document.createElement('div')
        
        
        contacts.forEach(contact => {
            let subDiv = document.createElement('div')
            subDiv.id = contact.id
                
            subDiv.innerHTML = `
            <div class="max-w md w-full lg:flex">
                <div class="h-48 mb-2 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('http://www.valleyroadwines.com/wp-content/uploads/2013/04/Anon-Person.png')" title="Picture">
            </div>
              <div id="kort" class="w-1/6 mb-2 border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 pr-1 flex flex-col justify-between leading-normal">
                  <div class="mb-8">
                    <p class="flex justify-between text-black font-bold text-xl">
                    ${contact.name}
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
        const deleteButton = document.createElement('button')
            deleteButton.classList = 'delete'
            deleteButton.id = 'delete'
            deleteButton.innerHTML = `
            <i class="material-icons">close</i>
            `
        subDiv.appendChild(deleteButton)    
        mainDiv.appendChild(subDiv)                        
        })

        div.appendChild(mainDiv)
    } else {
        div.innerHTML = '<p>You have no contacts in your address book</p>'
    }
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formButton').addEventListener('click',toggleForm)
    renderContacts()
    const addContactForm = document.querySelector('.new-contact-form')

    const deleteButton = document.querySelector('.contact-list')
    
    deleteButton.addEventListener('click',event => {
        let id = event.target.parentNode.id
        let contacts = JSON.parse(storage.getItem('contacts')) || []

        contacts.forEach(contact => {
    
          if(contact.id == id) {
              contacts.splice(contacts.indexOf(contact),1)
          } else return
    })
         
        storage.setItem('contacts', JSON.stringify(contacts))
        renderContacts()
   
    })




  
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
