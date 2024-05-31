import { FcLikePlaceholder } from "react-icons/fc";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineDescription } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import css from "./ImageCard.module.css";

const ImageCard = ({
  item: {
    alt_description: alt,
    urls: { small, regular },
    user: { name, location },
    likes,
  },
  onOpen,
}) => {
  return (
    <div className={css.item}>
      <img
        className={css.image}
        src={small}
        alt={alt}
        width={360}
        onClick={() => {
          onOpen(regular, alt);
        }}
      />
      <div className={css.descr}>
        <p>
          <MdOutlineDescription color="lightgray" className={css.icon} />
          <b>Description: </b>
          {alt}
        </p>
        <p>
          <FcLikePlaceholder className={css.icon} />
          <b>Likes: </b>
          {likes}
        </p>
        {name !== null && (
          <p className={css.text}>
            <AiOutlineUser color="green" className={css.icon} />
            <b>Author: </b>
            {name}
          </p>
        )}
        {location !== null && (
          <p className={css.text}>
            <SlLocationPin color="lightblue" className={css.icon} />
            <b>Location: </b>
            {location}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageCard;