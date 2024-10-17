export function carousel() {
    function calculateScrollPosition(activeItem, listWidth) {
        const itemWidth = activeItem.offsetWidth;
        return activeItem.offsetLeft - (listWidth / 2) + (itemWidth / 2);
    }

    function shouldHidePrevButton(currentIndex) {
        return currentIndex === 0;
    }

    function setActiveItem(items, currentIndex) {
        items.forEach(item => item.classList.remove('active'));
        if (items[currentIndex]) {
            items[currentIndex].classList.add('active');
        }
    }
    
    return {
        calculateScrollPosition,
        shouldHidePrevButton,
        setActiveItem
    }
}