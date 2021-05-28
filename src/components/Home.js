import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';
import db from '../firebase';
import ImgSlider from './ImgSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recomends from './Recomends';
import Trending from './Trending';
import Viewers from './Viewers';

function Home() {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let news = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
        db.collection("movies").onSnapshot(snapshot => {
            snapshot.docs.map(doc => {
                if(doc.data().type === "recommend") {
                    return recommends = [...recommends, {id: doc.id, ...doc.data()}]
                } else if(doc.data().type === "new") {
                    return news = [...news, {id: doc.id, ...doc.data()}]
                } else if(doc.data().type === "original") {
                    return originals = [...originals, {id: doc.id, ...doc.data()}]
                } else {
                    return trending = [...trending, {id: doc.id, ...doc.data()}]
                }
            })

            dispatch(
                setMovies({
                    recomends: recommends,
                    new: news,
                    originals: originals,
                    trending: trending,
                })
            )
        })
    }, [userName])

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recomends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    )
}

export default Home

const Container = styled.main `
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc( 3.5vw + 5px );

    &:after{
        background: url("/images/home-background.png") center center / cover
        no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
        
    }
`;