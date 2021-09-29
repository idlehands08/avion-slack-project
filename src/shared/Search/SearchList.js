import SearchListItem from './SearchListItem'
import './SearchList.scoped.css';

function SearchList ({ results, searched }) {

    return (
        <ul>
          { results.map((item, index) => item.toLowerCase().includes(searched.toLowerCase()) && 
          <SearchListItem key={index} item={item} />) }
          <li>Not the results you expected? <a href="#">Give feedback</a> or <a href="#">learn more</a></li>
        </ul>
    )
}

export default SearchList;
