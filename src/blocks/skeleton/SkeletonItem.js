import styled from 'styled-components'
import {
  PlaylistTrack,
  TrackTitle,
  TrackTitleImage,
} from '../center/StylePlayList'

const SkeletonPlaylistItem = styled.div`
  background: #313131;
  margin: 6px;
`

function SkeletonItem() {
  return (
    <SkeletonPlaylistItem>
      <PlaylistTrack>
        <TrackTitle>
          <TrackTitleImage />
        </TrackTitle>
      </PlaylistTrack>
    </SkeletonPlaylistItem>
  )
}

export default SkeletonItem
