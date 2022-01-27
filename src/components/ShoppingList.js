const plantList = [
    'monstera',
    'ficus lyrata',
    'photos argenté',
    'yucca',
    'palmier'
]

function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant, index) => (
                <li key={`${plant}-${index}`}>{ plant }</li>
            ))}
        </ul>
    )
}

export default ShoppingList