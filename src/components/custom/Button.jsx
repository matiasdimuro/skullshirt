export default function Button({ text, full, handleClick }) {
    
    return (
        <button 
            type="button" 
            onClick={handleClick}
            className={`px-10 py-2.5 rounded-lg bg-secondary_light text-grey_dark hover:bg-secondary_light focus:ring-2 focus:ring-secondary focus:outline-none font-medium text-sm ${full ? 'w-full' : 'w-auto'}`}>
            {text}
        </button>
    )
}