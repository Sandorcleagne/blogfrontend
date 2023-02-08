import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import top100Films from "./tagsData";
import { useDispatch } from "react-redux";
import { addBlogCategories } from "../../../features/blogSlice";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
export default function CheckboxesTags() {
  const dispatch = useDispatch();
  const getBlogCategories = (params) => {
    if (params.InputProps.startAdornment !== undefined) {
      const paramValue = params.InputProps.startAdornment;
      const tags = paramValue.map((state) => state.props.label);
      dispatch(addBlogCategories(tags));
    }
  };
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={top100Films}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </li>
      )}
      style={{ width: "100%" }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Tags"
          placeholder="Add Tags"
          onChange={getBlogCategories(params)}
        />
      )}
    />
  );
}
