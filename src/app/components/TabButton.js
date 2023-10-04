export default function TabButton({ active, selectTab, children }) {
    const buttonClasses = active
        ? 'text-accent border-b border-accent'
        : 'text-black hover:text-accent'

    return (
        <button onClick={selectTab}>
            <p className={`mr-4 font-semibold ${buttonClasses}`}>{children}</p>
        </button>
    )
}
