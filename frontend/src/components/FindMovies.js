import { useState, useEffect } from 'react';
import axios, { all } from 'axios';

export default function FindMovies() {


    const [movieName, setMoviename] = useState('');
    const [movieData, setMoviedata] = useState('');
    const url = new URL('http://127.0.0.1:8000/media/False')


    const handleSubmit = (e) => {
        e.preventDefault();

        axios.get(`http://127.0.0.1:8000/MoviesData/HRMoviesData/?search=${movieName}`).then((responce) => {
            setMoviedata(responce.data)


        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <div className="container-fluid findmovie" style={{ backgroundImage: `url(${'red.jpg'})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="row">
                    <h1 className='text-light fw-bold text-center bg-dark mt-2 rounded-pill'>EXPLORE HRITIK ROSHAN MOVIES</h1>
                    <div className="col-sm-4 col-xl-4 offset-4">

                        <form action="" className='mt-1' onSubmit={handleSubmit} >
                            <label><strong className='h5 fw-bold text-light '>Enter the Movie Name:</strong></label>

                            <input type="text" name="movieName" className='form-control' placeholder='Enter the hritik roshan Movie Name' onChange={(e)=>setMoviename(e.target.value)} list='alldata' required />

                            <input type="submit" value="Search" className='btn btn-info mt-1 offset-5' />
                        </form>

                    </div>
                </div>
                {
                    (
                        movieData != '' ?
                            <div className="row">
                                <div className="col-sm-9">
                                    <table className="table mt-2 table-bordered ">
                                        <thead className="bg-dark text-light">
                                            <tr>
                                                <th>Movie Name</th>
                                                <th>Movie Director</th>
                                                <th>Movie Casting</th>
                                                <th>Release Date</th>
                                                <th>Box Office Collection</th>
                                            </tr>
                                        </thead>
                                        <tbody style={{ backgroundColor: '#71ECBE' }}>
                                            <tr>
                                                <th>{movieData[0].movie_name}</th>
                                                <td>{movieData[0].movie_director}</td>
                                                <td>{movieData[0].movie_starring}</td>
                                                <td>{movieData[0].movie_date}</td>
                                                <td>{movieData[0].movie_collection}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <strong className="fw-bold h5 text-light" >Story of {movieData[0].movie_name}:</strong>
                                    <div className="story p-2 poster">
                                        {movieData[0].movie_story}
                                    </div>

                                    {

                                        (movieData[0].movie_source === url.href ?
                                            <button type="button" disabled className='btn btn-warning mt-4 fw-bold'> Movie Unavailable !</button>
                                            :
                                            <>
                                                <div className='mt-4'>
                                                    <a href={movieData[0].movie_source} download>
                                                        <button type="button" className='btn btn-warning fw-bold'><i class="fa-solid fa-cloud-arrow-down"></i> Download Movie</button>
                                                    </a>
                                                </div>
                                            </>
                                        )
                                    }

                                </div>
                                <div className="col-sm-3 mt-2">
                                    <h5 className="fw-bold text-light">Movie Poster:</h5>
                                    <img src={movieData[0].movie_poster} alt="poster" height='400' width="300" className='border border-light border-3' />
                                </div>
                            </div>
                            :
                            <div className='col-sm-10 mt-4'>
                                <div className='alert alert-dark text-center h1 offset-3'>
                                    <span style={{ fontFamily: 'console' }}>ENTER VALID MOVIE NAME TO SHOW DETAIL</span>
                                </div>
                            </div>
                    )
                }
            </div>



        </div>
    )

}
