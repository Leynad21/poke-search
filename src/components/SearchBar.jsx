import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import axios from 'axios'

const SearchBar = () => {
    // https://pokeapi.co/api/v2/pokemon?limit=151

    const [searchQuery, setSearchQuery] = useState("")
    const [pokemonList, setPokemonList] = useState([])

    const fetchPokemon = async () => {
        try {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
            const firstGenPokemon = response.data.results
            const pokeNames = firstGenPokemon.map(pokemon => pokemon.name)

            if (searchQuery) {
                const pokeNamesFiltered = pokeNames
                    .filter(pokemon => pokemon.toLowerCase()
                        .includes(searchQuery.toLowerCase()))
                setPokemonList(pokeNamesFiltered)
            } else {
                setPokemonList([])
            }

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchPokemon()
    }, [searchQuery])

    return (
        <>
            <h1 className=' text-2xl font-bold mb-2'>Search Pokemon:</h1>
            <div className=' flex bg-white border border-black w-80 sm:w-[800px] rounded-md py-4 relative'>
                <AiOutlineSearch className=' ml-4 text-2xl' />
                <input type="text"
                    placeholder='Search here...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className=' ml-2 text-lg w-full focus:outline-none'
                />
                {pokemonList &&
                    <div className='bg-white text-black w-full z-10 absolute top-14 rounded-md max-h-40 overflow-y-auto'>
                        {pokemonList.map((pokemon, index) => (
                            <p key={index} className='pl-4 hover:bg-yellow-300 cursor-pointer'>
                                {pokemon}
                            </p>
                        ))}
                    </div>
                }
            </div>
        </>
    )
}

export default SearchBar