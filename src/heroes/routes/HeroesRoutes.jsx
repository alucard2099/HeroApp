
import { Navbar } from '../../ui'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DcPages, Hero, MarvelPage, Search } from '../pages'



export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path='/*' element={<Navigate to={'/marvel'} />} />
                    <Route path='/marvel' element={<MarvelPage />} />
                    <Route path='/dc' element={<DcPages />} />

                    <Route path='/search' element={<Search />} />
                    <Route path='/hero/:id' element={<Hero />} />
                </Routes>

            </div>




        </>
    )
}
