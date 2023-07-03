import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Rating(props) {
  const { rating, numReviews } = props;
  return (
    <div className="rating">
      <span>
        {rating >= 1 ? (
          <FontAwesomeIcon icon={faStar} />
        ) : rating >= 0.5 ? (
          <FontAwesomeIcon icon={faStarHalfStroke} />
        ) : (
          <FontAwesomeIcon icon={faStar} style={{ color: '#ededed' }} />
        )}
      </span>
      <span>
        {rating >= 2 ? (
          <FontAwesomeIcon icon={faStar} />
        ) : rating >= 1.5 ? (
          <FontAwesomeIcon icon={faStarHalfStroke} />
        ) : (
          <FontAwesomeIcon icon={faStar} style={{ color: '#ededed' }} />
        )}
      </span>
      <span>
        {rating >= 3 ? (
          <FontAwesomeIcon icon={faStar} />
        ) : rating >= 2.5 ? (
          <FontAwesomeIcon icon={faStarHalfStroke} />
        ) : (
          <FontAwesomeIcon icon={faStar} style={{ color: '#ededed' }} />
        )}
      </span>
      <span>
        {rating >= 4 ? (
          <FontAwesomeIcon icon={faStar} />
        ) : rating >= 3.5 ? (
          <FontAwesomeIcon icon={faStarHalfStroke} />
        ) : (
          <FontAwesomeIcon icon={faStar} style={{ color: '#ededed' }} />
        )}
      </span>
      <span>
        {rating >= 5 ? (
          <FontAwesomeIcon icon={faStar} />
        ) : rating >= 4.5 ? (
          <FontAwesomeIcon icon={faStarHalfStroke} />
        ) : (
          <FontAwesomeIcon icon={faStar} style={{ color: '#ededed' }} />
        )}
      </span>
    </div>
  );
}

export default Rating;
