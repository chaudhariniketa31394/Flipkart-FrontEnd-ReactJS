import { InputBase , Box,styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



const SearchContainer = styled(Box)`
       background: #fff;
       width: 38%;
       margin-left: 16px;
       border-radius:2px;
       display: flex;
`

const InputSearchBase = styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset

`


const SeachIconWrapper = styled(Box)`
   color: blue;
   padding-top: 7px;
   padding-right: 7px;
   display:flex;

`



const Search = () => {
    return (
        <SearchContainer>
            <InputSearchBase placeholder="Search for products, brands and more"/>
        <SeachIconWrapper><SearchIcon/></SeachIconWrapper>
        </SearchContainer>
    )
}

export default Search;