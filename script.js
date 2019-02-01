let emails = []
customers.map(customer => {
    customer.contacts.email.forEach(email => {
    emails.push(email)
    })
})
console.log(emails)

