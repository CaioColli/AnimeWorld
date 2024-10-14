export function updateButtonVisibility(list) {
    const isAtStart = list.scrollLeft <= 0
    const isAtEnd = list.scrollWidth - list.scrollLeft === list.clientWidth

    return {
        prevButtonVisible: !isAtStart,
        nextButtonVisible: !isAtEnd
    }
}

export function applyButtonVisibility(prevButton, nextButton, { prevButtonVisible, nextButtonVisible }) {
    prevButton.style.display = prevButtonVisible ? 'block' : 'none'
    //nextButton.style.display = nextButtonVisible ? 'block' : 'none'
}
