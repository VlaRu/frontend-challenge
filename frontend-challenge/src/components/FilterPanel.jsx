export function FilteredPanel({filter}) {
    return (
        <>
            <button onClick={() => filter('all')}>All</button>
            <button onClick={() => filter('active')}>Active</button>
            <button onClick={() => filter('completed')}>Completed</button>
        </>
    )
}