import React from 'react';
import LibrarySong from './LibrarySong'

const Library = ({songs}) => {
    console.log(songs)
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {/* {songs.map((item) => {
                    return (
                        <LibrarySong song={item} />
                    )
                })} */}
                <div className="library-songs">
                    {songs.map((song) => (
                            <LibrarySong  song={song}/>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Library;