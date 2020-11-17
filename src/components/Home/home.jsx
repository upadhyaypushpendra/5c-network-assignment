import React from 'react';
import { useParams } from 'react-router-dom';
import ResultItem from './../ResultItem/ResultItem';
import './home.css';

const addRepos= async(repoList)=>{
    if(localStorage.getItem('repos') === null) localStorage.setItem('repos',JSON.stringify({}));
    let repos = JSON.parse(localStorage.getItem('repos'));
    repoList.forEach(repo=> repos[repo.id] = repo);
    localStorage.setItem('repos',JSON.stringify(repos));
};

function Home(props) {
    const [searchText,setSearchText] = React.useState("");
    const [search,setSearch] = React.useState('');
    const [searchResult,setSearchResult] = React.useState([]);
    let {username} = useParams();
    React.useEffect(()=>{
        if(username){
            setSearch(username);
        }
    },[]);
    
    React.useMemo(async ()=>{
        const response = await fetch(`https://api.github.com/users/${search}/repos`, {mode: 'cors'})
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            console.log(message);
            setSearchResult([]);
            return;
        }
        const result = await response.json();
        addRepos(result);
        setSearchResult(result);
    },[search]);

    
    const handleSearch=(e)=>{
        setSearch(searchText);
        alert("Searching "+searchText);
    };
    const handleOnChange = (e)=>{
        setSearchText(e.target.value);
    };
    return (
        <div className="home">
        <header>
            <input type="text" placeholder="Enter a git username..." name="searchInput" onChange={handleOnChange} value={searchText}/>
            <button onClick={handleSearch} >Search</button>
        </header>
        <section className="search-result">
            {searchResult.length > 0 
            ?
            searchResult.map( (repo,props)=><ResultItem key={repo.id} repo={repo} {...props} />)
            : 
            <h1>No Repositories to Show</h1>}
        </section>
        </div>
    );
}
export default Home;
