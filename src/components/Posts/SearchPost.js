import { Input } from "baseui/input";
const SearchPost = (props)=>{
    return(
        <div className="SearchPost">
            <Input
                overrides={{
                    Root: {
                      style: ({ $theme }) => ({
                        backgroundColor: $theme.colors.warning200,
                        marginBottom:'15px'
                      })
                    }
                  }}
                placeholder="Search"
                clearOnEscape
                onChange={(e)=>{
                    props.srch(e.target.value)
                }}
            />
        </div>
    )
}

export default SearchPost