export default function TabButton({ active, selectTab, children }) {
    const buttonClasses = active
        ? 'text-accent border-b border-accent'
        : 'text-black'

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold ${buttonClasses}`}>{children}</p>
        </button>
    )
}
