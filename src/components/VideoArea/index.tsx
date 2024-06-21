import * as S from './styles'

interface VideoAreaProps {
  url: string
}

const VideoArea = ({ url }: VideoAreaProps) => (
  <S.Wrapper>
    <iframe
      src={url}
      title="Mesversário do plano de carreira na câmara municipal"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="video"
    ></iframe>
  </S.Wrapper>
)

export default VideoArea
