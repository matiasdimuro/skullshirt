function NavIcon({ path, svg }) {
    return (
        <li>
            <a href={path} className="w-full">
                { svg }
            </a>
        </li>
    )
}

export default NavIcon