const contacts = []
const addNewClient = document.querySelector('.add-client')
const modalAdd = creareModal()
addNewClient.addEventListener('click', () => {
    document.body.append(modalAdd.modal)
    setTimeout(() => modalAdd.modal.classList.add('modal__add--active'), 0)
})

function createContact() {
    let select = document.createElement('div')
    let headerSelect = document.createElement('div')
    let currentSelect = document.createElement('div')
    let iconSelect = document.createElement('div')
    let icon = `
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_121_1079)">
    <path d="M1.495 3.69003C1.25 3.93503 1.25 4.33003 1.495 4.57503L5.65 8.73003C5.845 8.92503 6.16 8.92503 6.355 8.73003L10.51 4.57503C10.755 4.33003 10.755 3.93503 10.51 3.69003C10.265 3.44503 9.87 3.44503 9.625 3.69003L6 7.31003L2.375 3.68503C2.135 3.44503 1.735 3.44503 1.495 3.69003Z" fill="#9873FF"/>
    </g>
    <defs>
    <clipPath id="clip0_121_1079">
    <rect width="12" height="12" fill="white" transform="translate(0 12) rotate(-90)"/>
    </clipPath>
    </defs>
    </svg>`
    let bodySelect = document.createElement('div')
    let selectItemTel = document.createElement('div')
    let selectItemTelAnother = document.createElement('div')
    let selectItemMail = document.createElement('div')
    let selectItemVK = document.createElement('div')
    let selectItemFB = document.createElement('div')
    selectItemTel.classList.add('select__item')
    selectItemTelAnother.classList.add('select__item')
    selectItemMail.classList.add('select__item')
    selectItemVK.classList.add('select__item')
    selectItemFB.classList.add('select__item')
    bodySelect.classList.add('select__body')
    select.classList.add('select')
    headerSelect.classList.add('select__header')
    currentSelect.classList.add('select__current', 'contact__name')
    iconSelect.classList.add('select__icon')
    currentSelect.innerHTML = 'Телефон'
    selectItemTel.innerHTML = 'Телефон'
    selectItemTelAnother.innerHTML = 'Другое'
    selectItemMail.innerHTML = 'Email'
    selectItemVK.innerHTML = 'VK'
    selectItemFB.innerHTML = 'FaceBook'
    iconSelect.innerHTML = icon
    headerSelect.addEventListener('click', () => bodySelect.classList.toggle('select__body--active'))
    bodySelect.append(selectItemTel, selectItemMail, selectItemVK, selectItemFB, selectItemTelAnother)
    headerSelect.append(currentSelect, iconSelect)
    select.append(headerSelect, bodySelect)
    let socialItem = document.createElement('div')
    let socialInput = document.createElement('input')
    let cancelNewClient = document.createElement('button')
    let tooltipCancel = document.createElement('div')
    let cancelSVG = `<svg width="20" height="20" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_121_1291)">
    <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" fill="#B0B0B0"/>
    </g>
    <defs>
    <clipPath id="clip0_121_1291">
    <rect width="20" height="20" fill="white"/>
    </clipPath>
    </defs>
    </svg>`
    cancelNewClient.innerHTML = cancelSVG
    tooltipCancel.innerHTML = 'Удалить контакт'
    tooltipCancel.classList.add('tooltip__text')
    cancelNewClient.classList.add('cancel__client')
    socialItem.classList.add('social__container')
    socialInput.classList.add('social__input')
    socialInput.placeholder = 'Введите данные контакта'
    cancelNewClient.append(tooltipCancel)
    socialItem.append(select, socialInput, cancelNewClient)

    socialInput.addEventListener('input', () => {
        if (!socialInput.value) { }
        else {
            cancelNewClient.classList.add('cancel__client--active')
        }
    })

    return {
        currentSelect,
        socialItem,
        socialInput,
        bodySelect,
        selectItemTel,
        selectItemTelAnother,
        selectItemMail,
        selectItemVK,
        selectItemFB,
        cancelNewClient,
        select,
        headerSelect
    }
}

const GET = async () => {
    const response = await fetch('http://localhost:3000/api/clients')
    const data = await response.json()
    return data
}

function createClient(client) {
    let tr = document.createElement('tr')
    let tdId = document.createElement('td')
    let tdFullName = document.createElement('td')
    let tdPost = document.createElement('td')
    let createDate = document.createElement('span')
    let createTime = document.createElement('span')
    let updateDate = document.createElement('span')
    let updateTime = document.createElement('span')
    let tdPatch = document.createElement('td')
    let tdSocial = document.createElement('td')
    let tdActions = document.createElement('td')
    let clientChange = document.createElement('button')
    let clientDelete = document.createElement('button')
    tdActions.style.display = 'flex'
    tr.classList.add('tr__first')
    tdId.classList.add('td__item', 'td__id')
    tdFullName.classList.add('td__item', 'td__fullname')
    tdPost.classList.add('td__item')
    tdPatch.classList.add('td__item')
    tdSocial.classList.add('td__item', 'social__item-td')
    tdActions.classList.add('td__item', 'td__action')
    createDate.classList.add('td__date')
    createTime.classList.add('td__time')
    updateDate.classList.add('td__date')
    updateTime.classList.add('td__time')
    clientChange.classList.add('td__actions')
    clientDelete.classList.add('td__actions')
    clientChange.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.7" clip-path="url(#clip0_121_1932)">
    <path d="M2 11.5V14H4.5L11.8733 6.62662L9.37333 4.12662L2 11.5ZM13.8067 4.69329C14.0667 4.43329 14.0667 4.01329 13.8067 3.75329L12.2467 2.19329C11.9867 1.93329 11.5667 1.93329 11.3067 2.19329L10.0867 3.41329L12.5867 5.91329L13.8067 4.69329Z" fill="#9873FF"/>
    </g>
    <defs>
    <clipPath id="clip0_121_1932">
    <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    ${'Изменить'}`
    clientDelete.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.7" clip-path="url(#clip0_121_1962)">
    <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" fill="#F06A4D"/>
    </g>
    <defs>
    <clipPath id="clip0_121_1962">
    <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    ${'Удалить'}`

    const deleteModal = modalDeleteFunc()

    const deleteClient = () => {
        deleteModal.deleteTrue.addEventListener('click', () => {
            deleteById(client.id)
            tr.remove()
    
            deleteModal.modal.classList.remove('modal__delete--active')
            setTimeout(() => deleteModal.modal.remove(), 300)
        })
    }

    clientDelete.addEventListener('click', () => {
        deleteClient()
        document.body.append(deleteModal.modal)
        setTimeout(() => deleteModal.modal.classList.add('modal__delete--active'), 0)
    })

    clientChange.addEventListener('click', () => {
        const change = modalEdit(client)
        document.body.append(change.modal)
        setTimeout(() => change.modal.classList.add('modal__edit--active'), 0)
    })

    for (const data of client.contacts) {
        personalIcons(data.type, data.value, tdSocial)
    }

    tdId.innerHTML = client.id.substr(7)
    tr.id = client.id
    tdFullName.innerHTML = client.name + ' ' + client.surname + ' ' + client.lastName
    createDate.innerHTML = correctDate(client.createdAt)
    createTime.innerHTML = correctTime(client.createdAt)
    updateDate.innerHTML = correctDate(client.updatedAt)
    updateTime.innerHTML = correctTime(client.updatedAt)
    tdPost.append(createDate, createTime)
    tdPatch.append(updateDate, updateTime)
    tdActions.append(clientChange, clientDelete)
    tr.append(tdId, tdFullName, tdPost, tdPatch, tdSocial, tdActions)
    return tr
}

const deleteById = async (id) => {
    const response = await fetch(`http://localhost:3000/api/clients/${id}`, {
        method: 'DELETE',
    })
    const clients = await GET()
    findClients(clients)
}

const findParam = async (value) => {
    const response = await fetch(`http://localhost:3000/api/clients?search=${value}`, {
        method: 'GET',
    })
    const data = await response.json()
    return data
}

const tooltip = (type, value) => {
    const tooltipContainer = document.createElement('div')
    const tooltip = document.createElement('div')
    tooltipContainer.classList.add('tooltip__container')
    tooltip.classList.add('social__content')
    tooltip.textContent = type + ':' + ' ' + value
    tooltipContainer.append(tooltip)
    return {
        tooltipContainer,
        tooltip
    }
}

const createCRM = async () => {
    const clients = await GET()
    const dataClient = clients.slice(-1)
    const tBody = document.getElementById('data')
    clients.length > 1 ? tBody.append(createClient(dataClient[0])) : tBody.append(createClient(clients[0])), contacts.length = 0
}

const dataLoad = () => {
    document.getElementById('data').append(createPreloader())
    window.onload = async () => {
        const load = document.querySelector('.preloader')
        setTimeout(() => load.remove(), 2500)
        const clients = await GET()
        findClients(clients)
        const tBody = document.getElementById('data')
        setTimeout(() => {
            for (const client of clients) {
                tBody.append(createClient(client))
            }
        }, 2500)
    }
}

const dataAll = async () => {
    const clients = await GET()
    const tBody = document.getElementById('data')
    for (const client of clients) {
        tBody.append(createClient(client))
    }
}

const correctDate = date => {
    const newDate = new Date(date)
    const correctDate = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    }
    const resultDate = newDate.toLocaleString('ru', correctDate)
    return resultDate
}

const correctTime = date => {
    const newTime = new Date(date)
    const correctTime = {
        hour: 'numeric',
        minute: 'numeric',
    }
    const resultTime = newTime.toLocaleString('ru', correctTime)
    return resultTime
}

const telSVG = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.7">
<circle cx="8" cy="8" r="8" fill="#9873FF"/>
<path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/>
</g>
</svg>
`

const EmailSVG = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z" fill="#9873FF"/>
</svg>
`

const VKSVG = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.7">
<path d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z" fill="#9873FF"/>
</g>
</svg>
`

const FBSVG = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.7">
<path d="M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z" fill="#9873FF"/>
</g>
</svg>
`

const otherSVG = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z" fill="#9873FF"/>
</svg>
`

const socialIcons = (type, value, link, svg, container) => {
    const setTooltip = tooltip(type, value)
    link = document.createElement('a')
    link.style.marginRight = '5px'
    link.classList.add('social__svg')
    link.innerHTML = svg
    if (type === 'Email') {
        link.href = `mailto:${value.trim()}`
    }
    else if (type === 'Телефон') {
        link.href = `tel:${value.trim()}`
    }
    else {
        link.href = value.trim()
    }
    container.append(link)
    link.append(setTooltip.tooltipContainer)
}

const personalIcons = (type, value, item) => {
    switch (type) {
        case 'Телефон':
            let tel;
            socialIcons(type, value, tel, telSVG, item)
            break;
        case 'Email':
            let mail;
            socialIcons(type, value, mail, EmailSVG, item)
            break;
        case 'VK':
            let VK;
            socialIcons(type, value, VK, VKSVG, item)
            break;
        case 'FaceBook':
            let FB;
            socialIcons(type, value, FB, FBSVG, item)
            break;
        case 'Другое':
            let other;
            socialIcons(type, value, other, otherSVG, item)
            break;
        default:
            break;
    }
}

let sorted = 'id'
dir = false

const sort = document.querySelectorAll('.sort')
sort.forEach(e => {
    e.addEventListener('click', (el) => {
        const target1 = el.currentTarget
        const arrow = target1.querySelector('.arrow')
        arrow.classList.toggle('arrow--active')
        const target2 = el.currentTarget
        const text = target2.querySelector('.sort__word')
        text.classList.toggle('sort__word-1')
        const target3 = el.currentTarget
        const textActive = target3.querySelector('.sort__word--active')
        textActive.classList.toggle('sort__word-2')
    })
})

const sortClients = async (prop, dir = true) => {
    const data = await GET()
    return data.sort((a, b) => (!dir ? a[prop] < b[prop] : a[prop] > b[prop]) ? -1 : 1)
}

sort.forEach(e => {
    e.addEventListener('click', e => {
        sorted = e.currentTarget.dataset.btn
        dir = !dir
        sortContainer()
    })
})

const sortContainer = async () => {
    const clients = await sortClients(sorted, dir)
    const tBody = document.getElementById('data')
    tBody.innerHTML = ''
    for (const client of clients) {
        tBody.append(createClient(client))
    }
}

const modalDeleteFunc = () => {
    const modal = document.createElement('div')
    const modalOverlay = document.createElement('div')
    const deleteTitle = document.createElement('h2')
    const deleteDescr = document.createElement('p')
    const deleteTrue = document.createElement('button')
    const deleteFalse = document.createElement('button')
    const deleteCancel = document.createElement('div')
    modal.classList.add('modal__delete')
    modalOverlay.classList.add('modal__overlay', 'modal__overlay-delete')
    deleteTitle.classList.add('delete__title')
    deleteDescr.classList.add('delete__descr')
    deleteTrue.classList.add('new-client__yes', 'DELETE')
    deleteFalse.classList.add('new-client__not', 'new-client__not-delete')
    deleteCancel.innerHTML = `<svg class="close__add close__delete" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.2333 7.73333L21.2666 6.76666L14.4999 13.5334L7.73324 6.7667L6.76658 7.73336L13.5332 14.5L6.7666 21.2667L7.73327 22.2333L14.4999 15.4667L21.2666 22.2334L22.2332 21.2667L15.4666 14.5L22.2333 7.73333Z" fill="#B0B0B0"/>
</svg>`
    deleteTitle.textContent = 'Удалить клиента'
    deleteDescr.textContent = 'Вы действительно хотите удалить данного клиента?'
    deleteTrue.textContent = 'Удалить'
    deleteFalse.textContent = 'Отмена'
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('modal__delete--active')
            setTimeout(() => modal.remove(), 300)
        }
    })
    deleteCancel.addEventListener('click', () => {
        modal.classList.remove('modal__delete--active')
        setTimeout(() => modal.remove(), 300)
    })
    deleteFalse.addEventListener('click', () => {
        modal.classList.remove('modal__delete--active')
        setTimeout(() => modal.remove(), 300)
    })
    modalOverlay.append(deleteTitle, deleteDescr, deleteTrue, deleteFalse, deleteCancel)
    modal.append(modalOverlay)
    return {
        modal,
        modalOverlay,
        deleteTrue,
        deleteCancel,
        deleteFalse
    }
}

const modalEdit = (data) => {
    const modal = document.createElement('div')
    const modalOverlay = document.createElement('div')
    const form = document.createElement('form')
    const formOverlay = document.createElement('div')
    const modalTitle = document.createElement('div')
    const modalMain = document.createElement('span')
    const modalId = document.createElement('span')
    const inputSurname = document.createElement('input')
    const inputName = document.createElement('input')
    const inputLastname = document.createElement('input')
    const modalBottom = document.createElement('div')
    const modalContacts = document.createElement('div')
    const modalAdd = document.createElement('button')
    const modalUpdate = document.createElement('button')
    const modalDelete = document.createElement('button')
    const modalAddSVG = document.createElement('div')
    const modalClose = document.createElement('div')
    const errorContainer = document.createElement('p')
    const syntaxError = document.createElement('span')
    const nameError = document.createElement('span')
    const surnameError = document.createElement('span')
    const lastnameError = document.createElement('span')
    const someError = document.createElement('span')
    const contactsError = document.createElement('span')
    errorContainer.id = 'error__container'
    syntaxError.id = 'error-syntax'
    nameError.id = 'error-name'
    surnameError.id = 'error-surname'
    lastnameError.id = 'error-lastname'
    someError.id = 'error-some'
    contactsError.id = 'error-contacts'
    modal.classList.add('modal__edit')
    modalOverlay.classList.add('modal__overlay')
    form.classList.add('form')
    formOverlay.classList.add('form__overlay')
    modalTitle.classList.add('edit__title', 'new-client__title')
    modalMain.classList.add('edit')
    modalId.classList.add('id')
    inputSurname.classList.add('new-client__fullname')
    inputName.classList.add('new-client__fullname')
    inputLastname.classList.add('new-client__fullname')
    modalBottom.classList.add('new__social', 'custom__25')
    modalAdd.classList.add('new-client__social')
    modalUpdate.classList.add('new-client__yes')
    modalDelete.classList.add('new-client__not')
    modalAddSVG.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_121_884)">
    <path
    d="M8.00001 4.66659C7.63334 4.66659 7.33334 4.96659 7.33334 5.33325V7.33325H5.33334C4.96668 7.33325 4.66668 7.63325 4.66668 7.99992C4.66668 8.36659 4.96668 8.66659 5.33334 8.66659H7.33334V10.6666C7.33334 11.0333 7.63334 11.3333 8.00001 11.3333C8.36668 11.3333 8.66668 11.0333 8.66668 10.6666V8.66659H10.6667C11.0333 8.66659 11.3333 8.36659 11.3333 7.99992C11.3333 7.63325 11.0333 7.33325 10.6667 7.33325H8.66668V5.33325C8.66668 4.96659 8.36668 4.66659 8.00001 4.66659ZM8.00001 1.33325C4.32001 1.33325 1.33334 4.31992 1.33334 7.99992C1.33334 11.6799 4.32001 14.6666 8.00001 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 8.00001 1.33325ZM8.00001 13.3333C5.06001 13.3333 2.66668 10.9399 2.66668 7.99992C2.66668 5.05992 5.06001 2.66659 8.00001 2.66659C10.94 2.66659 13.3333 5.05992 13.3333 7.99992C13.3333 10.9399 10.94 13.3333 8.00001 13.3333Z"
    fill="#9873FF" />
    </g>
    <defs>
    <clipPath id="clip0_121_884">
    <rect width="16" height="16" fill="white" />
    </clipPath>
    </defs>
    </svg>`
    modalClose.innerHTML = `
    <svg class="close__add close__edit" width="29" height="29" viewBox="0 0 29 29" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
    d="M22.2333 7.73333L21.2666 6.76666L14.4999 13.5334L7.73324 6.7667L6.76658 7.73336L13.5332 14.5L6.7666 21.2667L7.73327 22.2333L14.4999 15.4667L21.2666 22.2334L22.2332 21.2667L15.4666 14.5L22.2333 7.73333Z"
    fill="#B0B0B0" />
    </svg>`
    modalContacts.id = 'social-edit'
    modalId.textContent = `ID: ${data.id.substr(7)}`
    modalMain.textContent = `Изменить данные`
    modalAdd.textContent = 'Добавить контакт'
    modalUpdate.textContent = 'Сохранить'
    modalDelete.textContent = 'Удалить клиента'
    inputSurname.value = data.name
    inputName.value = data.surname
    inputLastname.value = data.lastName
    inputName.id = 'input-name'
    inputSurname.id = 'input-surname'
    inputLastname.id = 'input-lastname'
    errorContainer.append(syntaxError, nameError, surnameError, lastnameError, someError, contactsError)
    modal.append(modalOverlay)
    modalOverlay.append(form)
    form.append(formOverlay, modalBottom, errorContainer, modalUpdate, modalDelete, modalClose)
    formOverlay.append(modalTitle, inputSurname, inputName, inputLastname)
    modalTitle.append(modalMain, modalId)
    modalBottom.append(modalContacts, modalAdd)
    modalAdd.prepend(modalAddSVG)
    const deleteModal = modalDeleteFunc()
    modalDelete.addEventListener('click', (e) => {
        e.preventDefault()
        document.body.append(deleteModal.modal)
        setTimeout(() => deleteModal.modal.classList.add('modal__delete--active'), 0)
        deleteModal.deleteTrue.addEventListener('click', () => {
            if (contacts.length != 0) {
                contacts.length = 0
            }
            deleteById(data.id)
            document.getElementById(data.id).remove()
            deleteModal.modal.classList.remove('modal__delete--active')
            setTimeout(() => deleteModal.modal.remove(), 300)
        })
        deleteModal.deleteCancel.addEventListener('click', () => {
            deleteModal.modal.classList.remove('modal__delete--active')
            setTimeout(() => deleteModal.modal.remove(), 300)
            document.body.append(modal)
            setTimeout(() => modal.classList.add('modal__edit--active'), 0)
        })
        deleteModal.deleteFalse.addEventListener('click', () => {
            deleteModal.modal.classList.remove('modal__delete--active')
            setTimeout(() => deleteModal.modal.remove(), 300)
            document.body.append(modal)
            setTimeout(() => modal.classList.add('modal__edit--active'), 0)
        })
        modal.classList.remove('modal__edit--active')
        setTimeout(() => modal.remove(), 300)
    })
    modalClose.addEventListener('click', () => {
        if (contacts.length != 0) {
            contacts.length = 0
        }
        modal.classList.remove('modal__edit--active')
        setTimeout(() => modal.remove(), 300)
    })
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('modal__edit--active')
            setTimeout(() => modal.remove(), 300)
            if (contacts.length != 0) {
                contacts.length = 0
            }
        }
    })
    window.addEventListener('click', (e) => {
        if (e.target === deleteModal.modal) {
            deleteModal.modal.classList.remove('modal__delete--active')
            setTimeout(() => deleteModal.modal.remove(), 300)
            document.body.append(modal)
            setTimeout(() => modal.classList.add('modal__edit--active'), 0)
        }
    })

    for (const client of data.contacts) {
        const socialEdit = createContact()
        contacts.push(client)
        socialEdit.socialInput.value = client.value
        socialEdit.currentSelect.innerHTML = client.type
        socialEdit.socialItem.style.marginTop = '25px'
        modalAdd.style.padding = '15px 0px'

        function setType(type) {
            type.addEventListener('click', () => {
                socialEdit.currentSelect.innerHTML = type.innerHTML
                socialEdit.bodySelect.classList.remove('select__body--active')
            })
        }

        const typesArray = [socialEdit.selectItemTel, socialEdit.selectItemTelAnother, socialEdit.selectItemMail, socialEdit.selectItemVK, socialEdit.selectItemFB]
        for (const type of typesArray) {
            setType(type)
        }

        socialEdit.cancelNewClient.addEventListener('click', () => {
            contacts.length -= 1
            socialEdit.socialItem.remove()
            if (contacts.length < 10) {
                modalAdd.classList.remove('hide')
            }
        })

        modalContacts.append(socialEdit.socialItem)
    }

    modalAdd.addEventListener('click', (e) => {
        e.preventDefault()
        contacts.push('1')
        const social = createContact()
        social.socialItem.style.marginTop = '25px'
        modalContacts.append(social.socialItem)

        function setType(type) {
            type.addEventListener('click', () => {
                social.currentSelect.innerHTML = type.innerHTML
                social.bodySelect.classList.remove('select__body--active')
            })
        }

        const typesArray = [social.selectItemTel, social.selectItemTelAnother, social.selectItemMail, social.selectItemVK, social.selectItemFB]
        for (const type of typesArray) {
            setType(type)
        }

        social.cancelNewClient.addEventListener('click', () => {
            contacts.length -= 1
            social.socialItem.remove()
            if (contacts.length < 10) {
                modalAdd.classList.remove('hide')
            }
        })

        if (contacts.length == 10) {
            modalAdd.classList.add('hide')
        }
    })

    modalUpdate.addEventListener('click', (e) => {
        e.preventDefault()
        if (!validate()) {
            return
        }
        const types = document.querySelectorAll('.contact__name')
        const values = document.querySelectorAll('.social__input')
        contacts.length = 0
        for (let i = 0; i < values.length; i++) {
            if (!validateContact(types[i], values[i])) {
                return
            }
            contacts.push({
                type: types[i].innerHTML,
                value: values[i].value
            })
        }
        modal.classList.remove('modal__edit--active')
        setTimeout(() => modal.remove(), 300)
        document.getElementById('data').innerHTML = ''
        patchById(data.id)
        dataAll()
    })

    const patchById = async (id) => {
        const response = await fetch(`http://localhost:3000/api/clients/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: String(inputName.value),
                surname: String(inputSurname.value),
                lastName: String(inputLastname.value),
                contacts: contacts
            })
        })
        const find = await GET()
        findClients(find)
        if (response.status >= 400) {
            const error = serverError()
            error.modalDescr.textContent = 'Не удалось изменить клиента! Попробуйте немного позжe'
            document.body.append(error.modal)
            setTimeout(() => error.modal.classList.add('modal__add--active'), 300)
            setTimeout(() => error.modal.classList.remove('modal__add--active'), 4000)
            setTimeout(() => error.modal.remove(), 4300)
        }
        else if (response.status < 400) {
            const Ok = serverOk()
            Ok.modalDescr.textContent = 'Клиент был успешно изменен'
            document.body.append(Ok.modal)
                setTimeout(() => Ok.modal.classList.add('modal__add--active'), 300)
                setTimeout(() => Ok.modal.classList.remove('modal__add--active'), 4000)
                setTimeout(() => Ok.modal.remove(), 4300)
        }
    }

    return {
        modal,
        modalId,
        inputSurname,
        inputName,
        inputLastname,
        modalDelete
    }
}

function creareModal() {
    const modal = document.createElement('div')
    const modalOverlay = document.createElement('div')
    const form = document.createElement('form')
    const formOverlay = document.createElement('div')
    const modalTitle = document.createElement('div')
    const inputSurname = document.createElement('input')
    const inputName = document.createElement('input')
    const inputLastname = document.createElement('input')
    const modalBottom = document.createElement('div')
    const modalContacts = document.createElement('div')
    const modalAddContact = document.createElement('button')
    const modalAddClient = document.createElement('button')
    const modalClose = document.createElement('button')
    const modalAddSVG = document.createElement('div')
    const modalCancel = document.createElement('div')
    const errorContainer = document.createElement('p')
    const syntaxError = document.createElement('span')
    const nameError = document.createElement('span')
    const surnameError = document.createElement('span')
    const lastnameError = document.createElement('span')
    const someError = document.createElement('span')
    const contactsError = document.createElement('span')
    errorContainer.id = 'error__container'
    syntaxError.id = 'error-syntax'
    nameError.id = 'error-name'
    surnameError.id = 'error-surname'
    lastnameError.id = 'error-lastname'
    someError.id = 'error-some'
    contactsError.id = 'error-contacts'
    modal.classList.add('modal__add')
    modalOverlay.classList.add('modal__overlay')
    form.classList.add('form')
    formOverlay.classList.add('form__overlay')
    modalTitle.classList.add('new-client__title')
    inputSurname.classList.add('new-client__fullname')
    inputName.classList.add('new-client__fullname')
    inputLastname.classList.add('new-client__fullname')
    modalBottom.classList.add('new__social')
    modalAddContact.classList.add('new-client__social')
    modalAddClient.classList.add('new-client__yes')
    modalClose.classList.add('new-client__not')
    modalAddSVG.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_121_884)">
    <path
    d="M8.00001 4.66659C7.63334 4.66659 7.33334 4.96659 7.33334 5.33325V7.33325H5.33334C4.96668 7.33325 4.66668 7.63325 4.66668 7.99992C4.66668 8.36659 4.96668 8.66659 5.33334 8.66659H7.33334V10.6666C7.33334 11.0333 7.63334 11.3333 8.00001 11.3333C8.36668 11.3333 8.66668 11.0333 8.66668 10.6666V8.66659H10.6667C11.0333 8.66659 11.3333 8.36659 11.3333 7.99992C11.3333 7.63325 11.0333 7.33325 10.6667 7.33325H8.66668V5.33325C8.66668 4.96659 8.36668 4.66659 8.00001 4.66659ZM8.00001 1.33325C4.32001 1.33325 1.33334 4.31992 1.33334 7.99992C1.33334 11.6799 4.32001 14.6666 8.00001 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 8.00001 1.33325ZM8.00001 13.3333C5.06001 13.3333 2.66668 10.9399 2.66668 7.99992C2.66668 5.05992 5.06001 2.66659 8.00001 2.66659C10.94 2.66659 13.3333 5.05992 13.3333 7.99992C13.3333 10.9399 10.94 13.3333 8.00001 13.3333Z"
    fill="#9873FF" />
    </g>
    <defs>
    <clipPath id="clip0_121_884">
    <rect width="16" height="16" fill="white" />
    </clipPath>
    </defs>
    </svg>`
    modalCancel.innerHTML = `
    <svg class="close__add close__edit" width="29" height="29" viewBox="0 0 29 29" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
    d="M22.2333 7.73333L21.2666 6.76666L14.4999 13.5334L7.73324 6.7667L6.76658 7.73336L13.5332 14.5L6.7666 21.2667L7.73327 22.2333L14.4999 15.4667L21.2666 22.2334L22.2332 21.2667L15.4666 14.5L22.2333 7.73333Z"
    fill="#B0B0B0" />
    </svg>`
    modalContacts.id = 'social'
    modalTitle.textContent = 'Новый клиент'
    modalAddContact.textContent = 'Добавить контакт'
    inputSurname.placeholder = 'Фамилия*'
    inputName.placeholder = 'Имя*'
    inputLastname.placeholder = 'Отчество*'
    modalAddClient.textContent = 'Сохранить'
    modalClose.textContent = 'Отмена'
    modalContacts.id = 'social'
    inputName.id = 'input-name'
    inputSurname.id = 'input-surname'
    inputLastname.id = 'input-lastname'
    errorContainer.append(syntaxError, nameError, surnameError, lastnameError, someError, contactsError)
    modal.append(modalOverlay)
    modalOverlay.append(form)
    form.append(formOverlay, modalBottom, errorContainer, modalAddClient, modalClose, modalCancel)
    formOverlay.append(modalTitle, inputSurname, inputName, inputLastname)
    modalBottom.append(modalContacts, modalAddContact)
    modalAddContact.prepend(modalAddSVG)

    modalCancel.addEventListener('click', (e) => {
        e.preventDefault()
        if (contacts.length != 0) {
            contacts.length = 0
        }
        setTimeout(() => {
            inputName.value = ''
            inputSurname.value = ''
            inputLastname.value = ''
            modalContacts.innerHTML = ''
        }, 300)
        modal.classList.remove('modal__add--active')
        setTimeout(() => modal.remove(), 300)
    })

    modalClose.addEventListener('click', (e) => {
        e.preventDefault()
        if (contacts.length != 0) {
            contacts.length = 0
        }
        setTimeout(() => {
            inputName.value = ''
            inputSurname.value = ''
            inputLastname.value = ''
            modalContacts.innerHTML = ''
        }, 300)
        modal.classList.remove('modal__add--active')
        setTimeout(() => modal.remove(), 300)
    })

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            if (contacts.length != 0) {
                contacts.length = 0
            }
            setTimeout(() => {
                inputName.value = ''
                inputSurname.value = ''
                inputLastname.value = ''
                modalContacts.innerHTML = ''
            }, 300)
            modal.classList.remove('modal__add--active')
            setTimeout(() => modal.remove(), 300)
        }
    })

    modalAddContact.addEventListener('click', (e) => {
        e.preventDefault()
        contacts.push('1')
        const social = createContact()
        social.socialItem.style.marginTop = '25px'
        modalContacts.append(social.socialItem)

        function setType(type) {
            type.addEventListener('click', () => {
                social.currentSelect.innerHTML = type.innerHTML
                social.bodySelect.classList.remove('select__body--active')
            })
        }

        const typesArray = [social.selectItemTel, social.selectItemTelAnother, social.selectItemMail, social.selectItemVK, social.selectItemFB]
        for (const type of typesArray) {
            setType(type)
        }

        social.cancelNewClient.addEventListener('click', () => {
            contacts.length -= 1
            social.socialItem.remove()
            if (contacts.length < 10) {
                modalAddContact.classList.remove('hide')
            }
        })

        if (contacts.length == 10) {
            modalAddContact.classList.add('hide')
        }
    })

    modalAddClient.addEventListener('click', async (e) => {
        e.preventDefault()
        if (!validate()) {
            return
        }
        const types = document.querySelectorAll('.contact__name')
        const values = document.querySelectorAll('.social__input')
        contacts.length = 0
        for (let i = 0; i < values.length; i++) {
            if (!validateContact(types[i], values[i])) {
                return
            }
            contacts.push({
                type: types[i].innerHTML,
                value: values[i].value
            })
        }
        modal.classList.remove('modal__add--active')
        setTimeout(() => modal.remove(), 300)

        setTimeout(() => {
            inputName.value = ''
            inputSurname.value = ''
            inputLastname.value = ''
            modalContacts.innerHTML = ''
        }, 300)
        await SET()
        await createCRM()
    })

    const SET = async () => {
        const response = await fetch('http://localhost:3000/api/clients', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: String(inputName.value),
                surname: String(inputSurname.value),
                lastName: String(inputLastname.value),
                contacts: contacts
            })
        })
        const find = await GET()
        findClients(find)
        if (response.status >= 400) {
            const error = serverError()
            document.body.append(error.modal)
            setTimeout(() => error.modal.classList.add('modal__add--active'), 300)
            setTimeout(() => error.modal.classList.remove('modal__add--active'), 4000)
            setTimeout(() => error.modal.remove(), 4300)
        }
        else if (response.status < 400) {
            const Ok = serverOk()
            document.body.append(Ok.modal)
                setTimeout(() => Ok.modal.classList.add('modal__add--active'), 300)
                setTimeout(() => Ok.modal.classList.remove('modal__add--active'), 4000)
                setTimeout(() => Ok.modal.remove(), 4300)
        }
        const result = await response.json()
    }

    return {
        modal,
        modalAddContact,
        modalContacts
    }
}

const createPreloader = () => {
    const container = document.createElement('div')
    const preloader = document.createElement('span')
    container.classList.add('preloader')
    preloader.id = 'loader'
    preloader.innerHTML = `
    <svg class="circle-outer" viewBox="0 0 86 86">
  <circle class="back" cx="43" cy="43" r="40"></circle>
    <circle class="front" cx="43" cy="43" r="40"></circle>
    <circle class="new" cx="43" cy="43" r="40"></circle>
      </svg>
        <svg class="circle-middle" viewBox="0 0 60 60">
          <circle class="back" cx="30" cy="30" r="27"></circle>
        <circle class="front" cx="30" cy="30" r="27"></circle>
      </svg>
      <svg class="circle-inner" viewBox="0 0 34 34">
    <circle class="back" cx="17" cy="17" r="14"></circle>
  <circle class="front" cx="17" cy="17" r="14"></circle>
</svg>`
    container.append(preloader)
    return container
}

const serverError = () => {
    const modal = document.createElement('div')
    const modalOverlay = document.createElement('div')
    const modalTitle = document.createElement('h2')
    const modalError = document.createElement('div')
    const modalDescr = document.createElement('p')
    modal.classList.add('modal__add')
    modalOverlay.classList.add('modal__overlay-error')
    modalError.classList.add('modal__error')
    modalTitle.classList.add('modal__error-title')
    modalDescr.classList.add('modal__error-descr')
    modalTitle.textContent = 'Упс, произошла ошибка('
    modalDescr.textContent = 'Сервер решил отдохнуть, попробуйте добавить клиента позже...'
    modalError.innerHTML = `
    <?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
<circle style="fill:#D75A4A;" cx="25" cy="25" r="25"/>
<polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" points="16,34 25,25 34,16 
	"/>
<polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" points="16,16 25,25 34,34 
	"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
`
    modal.append(modalOverlay)
    modalOverlay.append(modalTitle, modalError, modalDescr)
    return {
        modal,
        modalDescr
    }
}

const serverOk = () => {
    const modal = document.createElement('div')
    const modalOverlay = document.createElement('div')
    const modalTitle = document.createElement('h2')
    const modalError = document.createElement('div')
    const modalDescr = document.createElement('p')
    modal.classList.add('modal__add')
    modalOverlay.classList.add('modal__overlay-error')
    modalError.classList.add('modal__error')
    modalTitle.classList.add('modal__error-title')
    modalDescr.classList.add('modal__error-descr')
    modalTitle.textContent = 'Поздравляем!'
    modalDescr.textContent = 'Клиент был успешно добавлен'
    modalError.innerHTML = `
    <?xml version="1.0" ?><svg width="125px" height="125px" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><defs><style>
      .cls-1 {
        fill: #699f4c;
        fill-rule: evenodd;
      }
    </style></defs><path class="cls-1" d="M800,510a30,30,0,1,1,30-30A30,30,0,0,1,800,510Zm-16.986-23.235a3.484,3.484,0,0,1,0-4.9l1.766-1.756a3.185,3.185,0,0,1,4.574.051l3.12,3.237a1.592,1.592,0,0,0,2.311,0l15.9-16.39a3.187,3.187,0,0,1,4.6-.027L817,468.714a3.482,3.482,0,0,1,0,4.846l-21.109,21.451a3.185,3.185,0,0,1-4.552.03Z" id="check" transform="translate(-770 -450)"/></svg>
`
    modal.append(modalOverlay)
    modalOverlay.append(modalTitle, modalError, modalDescr)
    return {
        modal,
        modalDescr
    }
}

const findClients = (clients) => {
    const tBody = document.getElementById('data')
    const findList = document.getElementById('search')
    const input = document.querySelector('.header__search')
    findList.classList.add('remove__link')
    findList.innerHTML = ''
    clients.forEach(client => {
        const findItem = document.createElement('li')
        const findLink = document.createElement('a')
        findItem.classList.add('find__item')
        findLink.classList.add('find__link')

        findLink.textContent = `${client.name} ${client.surname} ${client.lastName}`
        findLink.href = '#'
        findItem.append(findLink)
        findList.append(findItem)
    })

    const visualFind = async (str) => {
        const response = await findParam(str)
        tBody.innerHTML = ''
        for (const client of response) {
            tBody.append(createClient(client))
        }
    }
    let time;
    const inputDelay = async() => {
        clearTimeout(time)
        time = setTimeout(() => {
            const value = input.value.trim()
            const foundItems = document.querySelectorAll('.find__item')
            if (value !== '') {
                visualFind(value)
                foundItems.forEach(link => {
                    if (link.innerText.search(value) == -1) {
                        link.classList.add('remove__link')
                        link.innerHTML = link.innerText
                    }
                    else {
                        link.classList.remove('remove__link')
                        findList.classList.remove('remove__link')
                        const str = link.innerText
                        link.innerHTML = marker(str, link.innerText.search(value), value.length)
                    }
                })
            }
            else {
                foundItems.forEach(link => {
                    tBody.innerHTML = ''
                    clients.forEach(client => {
                        tBody.append(createClient(client))
                    })
                        link.classList.remove('remove__link')
                        findList.classList.add('remove__link')
                        link.innerHTML = link.innerText
                    })
            }
        }, 300)
        }
    input.addEventListener('input', inputDelay)
    const marker = (all, need, length) => all.slice(0, need) + '<mark>' + all.slice(need, need + length) + '</mark>' + all.slice(need + length)
}

const validate = () => {
    const inputName = document.getElementById('input-name')
    const inputSurname = document.getElementById('input-surname')
    const inputLastname = document.getElementById('input-lastname')
    const syntax = document.getElementById('error-syntax')
    const name = document.getElementById('error-name')
    const surname = document.getElementById('error-surname')
    const lastname = document.getElementById('error-lastname')
    const some = document.getElementById('error-some')
    const validateArray = [syntax, name, surname, lastname, some]
    const rejexp = /[^а-яА-ЯёЁ]+$/g

    const onInputValue = input => {
        input.addEventListener('input', () => {
            input.style.borderColor = '#b0b0b0'
            for (const item of validateArray) {
                item.textContent = ''
            }
        });

        input.oncut = input.oncopy = input.onpaste = () => {
            input.style.borderColor = '#b0b0b0'
            for (const item of validateArray) {
                item.textContent = ''
            }
        };

        input.onchange = () => {
            input.style.borderColor = '#b0b0b0'
            if (inputSurname.value && inputName.value && inputLastname.value) {
                for (const item of validateArray) {
                    item.textContent = ''
                }
            }
        }
    }
    onInputValue(inputName)
    onInputValue(inputSurname)
    onInputValue(inputLastname)

    const requiredFullName = (input, message, value) => {
        if (!input.value) {
            input.style.borderColor = 'red'
            message.textContent = `Введите ${value} клиента`
            return false
        } else {
            message.textContent = ''
        }
        return true
    }

    const checkSyntax = (input, rejexp) => {
        if (rejexp.test(input.value)) {
            input.style.borderColor = 'red'
            syntax.textContent = 'Недопустимые символы'
            return false
        }
        return true
    }

    if (!requiredFullName(inputSurname, surname, 'Фамилию')) {
        return false
    }
    if (!requiredFullName(inputName, name, 'Имя')) {
        return false
    }
    if (!requiredFullName(inputLastname, lastname, 'Отчество')) {
        return false
    }
    if (!checkSyntax(inputSurname, rejexp)) {
        return false
    }
    if (!checkSyntax(inputName, rejexp)) {
        return false
    }
    if (!checkSyntax(inputLastname, rejexp)) {
        return false
    }
    return true
}

const validateContact = (type, contactInput) => {
    const contacts = document.getElementById('error-name')
    const onlyNumbers = /[^0-9]+$/g
    const onlyEnglish = /[^a-zA-Z|@|.]+$/g

    const onInputValue = input => {
        input.addEventListener('input', () => {
            input.style.borderColor = '#b0b0b0'
            contacts.textContent = ''
        })
        input.oncut = input.oncopy = input.onpaste = () => {
            input.style.borderColor = '#b0b0b0'
            contacts.textContent = ''
        }
    }
    onInputValue(contactInput)
    const showMessage = (message, container, input) => {
        container.textContent = message
        input.style.borderColor = 'red'
    }

    if (!contactInput.value) {
        showMessage('Заполните все поля контактов!', contacts, contactInput)
        return false
    }

    switch (type.innerHTML) {
        case 'Телефон':
            if (onlyNumbers.test(contactInput.value)) {
                showMessage('Допустимы только цифры!', contacts, contactInput)
                return false
            }
            else if (contactInput.value.length !== 11) {
                showMessage('Недопустимое кол-во символов!', contacts, contactInput)
                return false
            }
            return true
        case 'Email':
            if (onlyEnglish.test(contactInput.value)) {
                showMessage('Используйте латинские буквы', contacts, contactInput)
                return false
            }
            return true
        default:
            return true
    }
}

dataLoad()
