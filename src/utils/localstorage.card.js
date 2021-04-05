const localCard = {
    initialize() {
        const card = []
        localStorage.setItem('card', JSON.stringify(card))
    },
    addToLocalCard(item) {
        const card = JSON.parse(localStorage.getItem('card'))
        card.push(item)
        localStorage.setItem('card', JSON.stringify(card))
    },
    removeFromLocalCard(itemID) {
        const card = JSON.parse(localStorage.getItem('card'))
        const newCard = card.filter((item) => item.id !== itemID)
        localStorage.setItem('card', JSON.stringify(newCard))
    },
    clear() {
        localStorage.clear()
    },
    getCard() {
        return JSON.parse(localStorage.getItem('card'))
    }
}

export default localCard