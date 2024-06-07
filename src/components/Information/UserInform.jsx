import { useEffect } from "react";
import Input from "./Input.jsx";
import { isNotEmpty, hasMinLength } from "./Validation.jsx";
import { useInput } from "../Hook/useInput.jsx";

export default function UserInform(props) {
  const {
    value: nameValue,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    hasError: nameHasError,
  } = useInput("", (value) => hasMinLength(value, 5) && isNotEmpty(value));

  const {
    value: streetValue,
    handleInputChange: handleStreetChange,
    handleInputBlur: handleStreetBlur,
    hasError: streetHasError,
  } = useInput("", (value) => hasMinLength(value, 5) && isNotEmpty(value));

  const {
    value: codeValue,
    handleInputChange: handleCodeChange,
    handleInputBlur: handleCodeBlur,
    hasError: codeHasError,
  } = useInput("", (value) => hasMinLength(value, 5) && isNotEmpty(value));

  const {
    value: cityValue,
    handleInputChange: handleCityChange,
    handleInputBlur: handleCityBlur,
    hasError: cityHasError,
  } = useInput("", (value) => hasMinLength(value, 5) && isNotEmpty(value));
  useEffect(() => {
    if (!nameHasError && !streetHasError && !codeHasError && !cityHasError) {
      props.onValid(true);
    } else {
      props.onValid(false);
    }
  }, [nameHasError, streetHasError, codeHasError, cityHasError]);

  return (
    <form>
      <div className="form-control">
        <Input
          label="Your Name"
          id="name"
          type="name"
          name="name"
          onBlur={handleNameBlur}
          onChange={handleNameChange}
          value={nameValue}
          error={nameHasError && "Please enter a valid name!"}
        />
        <Input
          label="Street"
          id="street"
          type="street"
          name="street"
          onBlur={handleStreetBlur}
          onChange={handleStreetChange}
          value={streetValue}
          error={streetHasError && "Please enter a valid street!"}
        />
        <Input
          label="Postal Code"
          id="code"
          type="code"
          name="code"
          onBlur={handleCodeBlur}
          onChange={handleCodeChange}
          value={codeValue}
          error={codeHasError && "Please enter a valid Postal Code!"}
        />
        <Input
          label="City"
          id="city"
          type="city"
          name="city"
          onBlur={handleCityBlur}
          onChange={handleCityChange}
          value={cityValue}
          error={cityHasError && "Please enter a valid City!"}
        />
      </div>
    </form>
  );
}
