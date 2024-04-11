import Button from "./Button";
import Autocomplete from "./Autocomplete";

export default function ComponentsOverrides(theme) {
  return Object.assign(Button(theme), Autocomplete(theme));
}
