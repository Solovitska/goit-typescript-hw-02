import { MdError } from "react-icons/md";
import css from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => {
  return (
    <p className={css.text}>
      <MdError className={css.icon} size={22} color={"LightCoral"} />
      <b>Sorry, something went wrong!</b>
    </p>
  );
};
export default ErrorMessage;