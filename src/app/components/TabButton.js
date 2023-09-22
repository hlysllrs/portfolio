export default function TabButton({ active, selectTab, children }) {
    const buttonClasses = active
        ? 'text-[#4bbd04] border-b border-[#4bbd04]'
        : 'text-black'

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold ${buttonClasses}`}>{children}</p>
        </button>
    )
}
