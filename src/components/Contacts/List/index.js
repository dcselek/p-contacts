import { useState } from 'react'

function List({ contacts }) {
    const [filter, setFilter] = useState("")

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => {
            return item[key].toString().toLowerCase().includes(filter.toLowerCase())
        })
    })
    return (
        <div>

            <input placeholder="Filter Contact" value={filter} onChange={(e) => setFilter(e.target.value)} />
            <ul id='list'>
                {
                    filtered.map((contact, index) => (
                        <li key={index}>
                            <span>{contact.fullname}</span>
                            <span>{contact.phone_number}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default List
