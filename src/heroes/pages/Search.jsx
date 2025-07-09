import React, { useEffect, useMemo, useState } from 'react'
import { HeroCard } from '../components/HeroCard'
import { getHeroByName } from '../helpers'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import queryString from 'query-string'

export const Search = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search)
    const heroes = getHeroByName(q);

    const { searchText, onInputChange, onResetForm } = useForm({
        searchText: '',

    })

    const onSubmit = (event) => {

        event.preventDefault()
        if (searchText.trim().length <= 1) return;
        navigate(`?q=${searchText}`)
        onResetForm()
    }


    const DataHero = useMemo(() => {

        if (q === '') {
            return <div className='alert alert-primary'>
                Search Hero
            </div>
        }

        if (heroes.length === 0) {
            return <div className='alert alert-danger'>
                {`No se encontro el heroe ${q}`}
            </div>
        }

        return heroes.map(
            hero => <HeroCard key={hero.id} {...hero}></HeroCard>
        )

    }, [location.search])


    return (
        <>
            <h1>Search</h1>
            <hr />
            <div className='row'>
                <div className="col-5">

                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSubmit}>

                        <input type="text"
                            placeholder='Busca al heroe'
                            className='form-control'
                            name={'searchText'}
                            autoComplete='off'
                            value={searchText}
                            onChange={onInputChange} />
                        <button className='btn btn-outline-primary mt-1'>
                            Buscar
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />
                    {DataHero}
                </div>

            </div>


        </>
    )
}
