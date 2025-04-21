import { useEffect, useState } from 'react'

type Song = {
  id: number
  title: string
  artist: string
  albumName: string
}

const HomePage = () => {
  const [songs, setSongs] = useState<Song[]>([])

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch('/api/songs')

        if (!response.ok) {
          throw new Error()
        }
        const data: Song[] = await response.json()
        console.log('Fetched songs on client:', data)

        setSongs(data)
      } catch (error) {
        console.error('Failed to fetch songs:', error)
      }
    }

    fetchSongs()
  }, [])

  return (
    <div>
      <h1>Songs List</h1>
      <ul>
        {songs && songs.length > 0 ? (
          songs.map((song) => (
            <li key={song.id}>
              {song.title} by {song.artist} (Album: {song.albumName})
            </li>
          ))
        ) : (
          <li>No songs available</li>
        )}
      </ul>
    </div>
  )
}

export default HomePage
