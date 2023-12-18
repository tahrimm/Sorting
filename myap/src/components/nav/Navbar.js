import { React } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import "./Navbar.css";

const Navbar = (props) => {
  // starts playing the sorting algorithm
  const sortArrayHandler = () => {
    props.startSorting();
  };

  // generates a new random array
  const generateNewArrayHandler = () => {
    props.generateNewArray();
  };

  // lets the user change size of array and speed of sorting
  const handleArraySizeAndSpeedChange = (event, newValue) => {
    props.handleArraySizeAndSpeedChange(newValue);
  };

  // handle changing of algorithm
  const handleSortingAlgorithmChange = (event, newValue) => {
    console.log(`sorting algorithm changed to: ${newValue}`);
    props.setAlgorithm(newValue);
  };

  // custom CSS for MUI buttons

  return (
    <div id="nav-bar">
      <div id="title">
        <h1>Sorting Algorithm Visualizer</h1>
      </div>
      <div id="toolbar">
        <div>
          <Typography gutterBottom>Array size & sorting speed</Typography>
          <Slider
            value={props.arraySize}
            min={5}
            step={5}
            max={100}
            onChange={handleArraySizeAndSpeedChange}
            valueLabelDisplay="auto"
            aria-labelledby="array size and sorting speed slider"
            id="non-linear-slider"
          />
        </div>
        {/* <Divider orientation="vertical" variant="fullWidth" light="True" /> */}
        <div className="separator" />

        <Button variant="text" color="info" onClick={generateNewArrayHandler}>
          Generate New Array
        </Button>

        <div className="separator" />
        <ToggleButtonGroup
          color="info"
          value={props.algorithm}
          exclusive
          onChange={handleSortingAlgorithmChange}
          aria-label="sorting algorithm"
        >
          <ToggleButton
            value="Insertion Sort"
            variant="outlined"
            aria-label="Insertion Sort"
          >
            Insertion Sort
          </ToggleButton>
          <ToggleButton
            value="Merge Sort"
            variant="outlined"
            aria-label="Merge Sort"
          >
            Merge Sort
          </ToggleButton>
          <ToggleButton
            value="Quick Sort"
            variant="outlined"
            aria-label="Quick Sort"
          >
            Quick Sort
          </ToggleButton>
          <ToggleButton
            value="Bubble Sort"
            variant="outlined"
            aria-label="Bubble Sort"
          >
            Bubble Sort
          </ToggleButton>
        </ToggleButtonGroup>
        <div className="separator" />

        <Button variant="outlined" color="secondary" onClick={sortArrayHandler}>
          Sort!
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
