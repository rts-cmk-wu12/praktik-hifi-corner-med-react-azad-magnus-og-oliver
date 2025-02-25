export const FilterOptions = ({SortBy, ItemPerPage, SetSortBy, SetItemPerPage}) => {
    return (
        <div className="filters-under-headline">
            <div>
                <p className="filters-under-headline__text">sort by:
                    <select
                        name="sort"
                        id="sort-select"
                        value={SortBy}
                        onChange={(e) => SetSortBy(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="Price">Price</option>
                        <option value="Name">Name</option>
                    </select>
                </p>
            </div>

            <div>
                <p className="filters-under-headline__text">show:
                    <select
                        name="sort"
                        id="sort-select"
                        value={ItemPerPage}
                        onChange={(e) => SetItemPerPage(Number(e.target.value))}
                    >
                        <option value="6">6</option>
                        <option value="12">12</option>
                        <option value="24">24</option>
                        <option value="100">All</option>
                    </select>
                </p>
            </div>
        </div>
    )
}