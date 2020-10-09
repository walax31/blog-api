import React from 'react'
import { useParams } from 'react-router-dom'
import withHelmet from '../../utils/withHelmet'

function Story () {
  const { storyId } = useParams()
  return (
    <div>Story page{storyId}

    </div>
  )
}
export default withHelmet('Walauck | Blog')(Story)
