import SearchListItem from './SearchListItem'
import './SearchList.scoped.css';

function SearchList ({ searchInput }) {
    const list = ['Apple', 'Banana', 'Cupcake', 'AFile', 'Bfile', 'Cfile', 'Android', 'Boozy', 'Cooper']

    return (
        <ul>
        { list.map(item => 
          item.toUpperCase().includes(searchInput.toUpperCase()) && 
          <SearchListItem item={item} />) }
        </ul>
    )
}

export default SearchList;
