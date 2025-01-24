import { useState, useEffect, useRef } from "react";

function FilterBeers({ allSearchVal }){
    const [mySearch, setMySearch] = useState("");
    const inputRef = useRef();

    async function makePost(){
        const paramx = new URLSearchParams({'q': mySearch});

        try{
            const result = await fetch(`https://ih-beers-api2.herokuapp.com/beers/search?${paramx}`)
            const data = await result.json();
            if (result.status !== 200) throw Error(data.message);
            console.log(data);
            allSearchVal(data);
        }catch(error){
            console.log("Something went wrong", error);
        }
        
    }

    useEffect(() => {
        const keyPressEvent = (e) => {
            if (e.keyCode === 13) {
                //console.log('Enter key pressed');
                makePost();
                setMySearch('');
            }
        };
    
        inputRef.current.addEventListener('keydown', keyPressEvent);
        let parentInputRef = inputRef;
    
        return () => {
            //console.log('remove event listener');
            parentInputRef.current.removeEventListener('keydown', keyPressEvent);
        }

    }, [mySearch]);
   
    return (
        <div>
        <div className="search-box">
            <label htmlFor="search">Search</label>
            <input 
                name="search" 
                value={mySearch}
                placeholder='Enter search text (Press enter key to confirm)'
                type="text"
                onChange={(e) => setMySearch(e.target.value)}
                ref={inputRef}
            />
        </div>
        <div style={{flex: 1, height: '0.5px', backgroundColor: 'gray'}} />
        </div>
    )
}
export default FilterBeers