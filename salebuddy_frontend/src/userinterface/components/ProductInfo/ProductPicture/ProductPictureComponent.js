import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
export default function ProductPictureComponent({ media }) {
  if (!media) return <div style={{ width: '100%', height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ width: '80%', height: '80%', background: 'blue' }}>
    </div>
  </div>
  const isVideo = media.includes('.webm') || media.includes('.mp4');

  return (<>
    <div style={{ width: '100%', height: '80%', display: 'flex',  alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ width: '100%', height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <div style={{ fontSize: '170%', color: 'white', position: 'absolute', right: '3%', top: '1%', cursor: 'pointer', display: 'flex' }}>
          <FavoriteBorderIcon style={{ marginRight: 20 }} />
          <ShareIcon />
        </div>
        {isVideo ? (
          <video src={media} controls style={{ maxWidth: '90%', maxHeight: '90%' }} />
        ) : (
          <img src={media} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} />
        )}
      </div>
      <hr style={{ width: '80%', height: '0.01%' }}></hr>
    </div>

  </>);
}
