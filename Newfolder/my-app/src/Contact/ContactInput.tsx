import { TextField } from "@material-ui/core";

const ContactInput = ({name, className}: Props) => {
  return (
    <>
      <form  className={className} noValidate autoComplete="off">
        <TextField  className={className}  id="outlined-basic" label={name} variant="outlined" />
      </form>
    </>
  );
};
type Props={
    name: string,
    className: any
}
export default ContactInput;
