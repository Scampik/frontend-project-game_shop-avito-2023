import ProgressBar from 'react-bootstrap/ProgressBar';

const CircleDiagram = ({ percentage }) => (
  <div className="rounded-circle">
    <ProgressBar
      className="progress-bar-striped progress-bar-animated rounded-circle"
      variant="primary"
      label={`${percentage}%`}
      now={percentage}
      max={100}
      style={{
        // width: '25%',
        // backgroundRepeat: 'repeat',
      }}
      size="bg"
      animated
    />
  </div>
);

export default CircleDiagram;
