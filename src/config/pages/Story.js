import React from 'react'
import { useParams } from 'react-router-dom'

function Story () {
  const { storyId } = useParams()
  return (
    <div>Story page{storyId}

    </div>
  )
}
export default Story
