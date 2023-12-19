function NavLink({ label, path }) {
    return (
        <li>
            <a href={path} className="
                inline-block w-full sm:inline sm:w-auto
                px-2 py-2 font-bold text-md grey_dark
                hover:bg-secondary_light sm:hover:bg-transparent
            ">
                {label}
            </a>
        </li>
    )
}

export default NavLink