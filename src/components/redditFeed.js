import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { fetchData } from '../features/dataSlice';

function RedditFeed () {
    const dispatch = useDispatch();
    const { data } = useSelector( state => state.data);

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    return (
        <div>
            {data && data.map( (child, i) => 
            <div key = {i}>
                <p key = {`title_${i}`}> {child.data.title} </p>
                {child.data.post_hint === "image" && <img src = {child.data.url_overridden_by_dest} height = {child.data.icon_height} width = {child.data.icon_width} key = {`img_${i}`} />}
                {child.data.post_hint === "hosted:video" && <video width = {child.data.secure_media.reddit_video.width} height = {child.data.secure_media.reddit_video.height} controls> <source src = {child.data.secure_media.reddit_video.fallback_url} /> </video>}
            </div>
            )}
        </div>

    )
}

export default RedditFeed;