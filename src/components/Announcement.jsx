import React from 'react'
import styled from 'styled-components'

const AnnouncementWrapper = styled.div`
    font-size : 0.8rem
    color : white
    font-weight : 600
    padding : 0.3rem
    background : teal

    text-align : center

`

const Announcement = () => {
  return (
    <div>
      <AnnouncementWrapper>
        Super Deal ! Free shipping on order over $50
      </AnnouncementWrapper>
    </div>
  )
}

export default Announcement
