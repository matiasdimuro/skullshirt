import { useState, useEffect } from "react"
import { useAppStore } from "../../store/AppStore"

function CustomCheckbox({ label, query }) {

	const [ isSelected, setIsSelected ] = useState(false)
    const { filtersQuery, addFilterQuery, removeFilterQuery } = useAppStore((state) => state)

	const handleClick = () => {
		setIsSelected(!isSelected);
	}
	
	useEffect(() => {
		console.log(`Checkbox ${label}: ${isSelected}`);
		isSelected 
			? addFilterQuery(filtersQuery, query) 
			: removeFilterQuery(query, filtersQuery);
	}, [isSelected])

	useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search);
		const newIsSelectedValue = searchParams.has('type') && searchParams.get('type')?.includes(query)	
		// console.log(`Checkbox ${label}: ${newIsSelectedValue}`);
		newIsSelectedValue && setIsSelected(newIsSelectedValue)
	}, [])	

	return (
		<div className={`
			w-full p-2 flex items-center gap-2 
			${isSelected ? 'bg-secondary_light' : 'bg-transparent' }
		`}>
			<input onChange={handleClick} type="checkbox" id={label} className="hidden" />
			<label className="w-full cursor-pointer" htmlFor={label}>
				{label}
			</label>
		</div>
	)
}

export default CustomCheckbox