import '../styles/Toolbar.css';

export function FilteredPanel({filter, active}) {
    return (
        <div className="filter-btn_container">
            <button className={active === 'all'? 'active': ''} onClick={() => filter('all')}>All</button>
            <button className={active === 'active'? 'active': ''} onClick={() => filter('active')}>Active</button>
            <button className={active === 'completed'? 'active': ''} onClick={() => filter('completed')}>Completed</button>
        </div>
    )
}